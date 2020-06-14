import { Component, OnInit, DoCheck } from "@angular/core";
import { NewsContextService } from "../../../../shared/services/news-context.service";
import { Article } from "../../../../data/schema/article";

import { SearchbarContextService } from "../../../../shared/services/searchbar-context.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.sass"],
})
export class HomeComponent implements OnInit, DoCheck {
  news = new Array<Article>();
  newsBackUp: Array<Article>;
  showMap: Boolean = true;

  constructor(
    private newsContext: NewsContextService,
    private searchBarContext: SearchbarContextService
  ) {}

  ngDoCheck(): void {
    this.searchBarContext.currentSearchValue.subscribe(
      (value: any) => {
        if (value && value.length > 0) {
          this.news = this.newsBackUp.filter(
            (article) =>
              article.title.toLowerCase().includes(value.toLowerCase()) ||
              article.source.toLowerCase().includes(value.toLowerCase())
          );
          this.showMap = false;
        } else {
          this.news = this.newsBackUp;
          this.showMap = true;
        }
      },
      (err: any) => console.error(err)
    );
  }

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.newsContext.currentNews.subscribe(
      (value: any) => {
        this.news = this.sortData(value);
        this.newsBackUp = this.news;
      },
      (error: any) => console.error(JSON.stringify(error))
    );
  }

  sortData(newsArray: Array<Article>) {
    const dataLength = newsArray.length;
    const sortedNews = [];
    var floors = [];

    //Ordenando aleatoriamente
    for (let i = 0; i < dataLength; i++) {
      let randomIndex = this.getRandomIndex(floors, dataLength);
      floors.push(randomIndex);
      sortedNews.push(newsArray[randomIndex]);
    }

    sortedNews.sort(
      (after: Article, before: Article) =>
        +new Date(before.publishedAt) - +new Date(after.publishedAt).getTime()
    );

    return sortedNews;
  }

  getRandomIndex(floors: any, length: any) {
    const randomIndex = Math.floor(Math.random() * length);

    if (!floors.includes(randomIndex) || !floors.length) {
      return randomIndex;
    } else {
      return this.getRandomIndex(floors, length);
    }
  }
}
