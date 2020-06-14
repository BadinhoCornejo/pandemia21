import { Injectable } from "@angular/core";
import { NewsService } from "./news.service";
import { BehaviorSubject } from "rxjs";
import { Article } from "../../data/schema/article";

@Injectable({
  providedIn: "root",
})
export class NewsContextService {
  newsArray = new Array<Article>();
  private newsSource: any = new BehaviorSubject([]);
  currentNews = this.newsSource.asObservable();

  constructor(private newsService: NewsService) {
    this.getNews();
  }

  setNews(news: any) {
    this.newsSource.next(news);
  }

  getNews() {
    if (!this.newsArray.length) {
      this.fetchData("https://peaceful-eyrie-08219.herokuapp.com/newsApi", 1);
    }
  }

  private fetchData(url: string, page: any) {
    if (page > 5) {
      this.setNews(this.newsArray);
      return 0;
    }

    this.newsService.getNews(url, page).subscribe(
      (result: any) => {
        let cleanNews = this.cleanData(result.articles);
        cleanNews.map((article: Article) => this.newsArray.push(article));

        this.fetchData(url, page + 1);
      },
      (error) => console.error(JSON.stringify(error))
    );
  }

  private cleanData(array: any) {
    const cleanArray = new Array<Article>();

    array.map((i: any) => {
      let article = new Article();

      article.title = i.title;
      article.source = i.source.name;
      article.url = i.url;
      article.publishedAt = i.publishedAt;
      article.description = i.description;
      article.media = i.urlToImage;

      cleanArray.push(article);
    });

    return cleanArray;
  }
}
