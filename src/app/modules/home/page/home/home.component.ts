import { Component, OnInit } from "@angular/core";
import { NewsContextService } from "../../../../shared/services/news-context.service";
import { Article } from "../../../../data/schema/article";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.sass"],
})
export class HomeComponent implements OnInit {
  news = new Array<Article>();

  constructor(private newsContext: NewsContextService) {}

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.newsContext.currentNews.subscribe(
      (value: any) => (this.news = this.sortData(value)),
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
