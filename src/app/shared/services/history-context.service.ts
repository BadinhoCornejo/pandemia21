import { Injectable } from "@angular/core";

import { BehaviorSubject } from "rxjs";

import { ArticlesService } from "./articles.service";
import { UsersService } from "./users.service";
import { AngularFireAuth } from "@angular/fire/auth";

import { Article } from "../../data/schema/article";
import { User } from "../../data/schema/user";

@Injectable({
  providedIn: "root",
})
export class HistoryContextService {
  user: User = new User();
  newsArray: Array<Article>;
  private newsSource: any = new BehaviorSubject([]);
  currentNews = this.newsSource.asObservable();

  constructor(
    private af: AngularFireAuth,
    private userService: UsersService,
    private articlesService: ArticlesService
  ) {
    this.getHistory();
  }

  setHistory(news: any) {
    this.newsSource.next(news);
  }

  getHistory() {
    this.af.authState.subscribe((res) => {
      if (res && res.uid) {
        this.user = new User();
        this.user.uid = res.uid;
        this.userService.getUser(this.user.uid).subscribe((data) => {
          if (data.payload.exists) {
            this.user = data.payload.data() as User;
            this.newsArray = new Array<Article>();
            this.loadArticles();
            this.setHistory(this.newsArray);
          }
        });
      } else {
        this.user = null;
      }
    });
  }

  private loadArticles() {
    if (this.user.history.length) {
      this.user.history.map((articleUrl) => {
        this.articlesService.getArticleByUrl(articleUrl).subscribe(
          (res) => {
            const article = res[0] as Article;
            this.newsArray.push(article);
          },
          (err) => console.error(err)
        );
      });
    }
  }
}
