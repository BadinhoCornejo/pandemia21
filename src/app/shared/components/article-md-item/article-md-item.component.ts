import { Component, OnInit, Input } from "@angular/core";

import { AngularFireAuth } from "@angular/fire/auth";
import { UsersService } from "../../services/users.service";
import { ArticlesService } from "../../services/articles.service";

import { Article } from "../../../data/schema/article";
import { User } from "../../../data/schema/user";

import * as moment from "moment";
import localization from "moment/locale/es";

@Component({
  selector: "app-article-md-item",
  templateUrl: "./article-md-item.component.html",
  styleUrls: ["./article-md-item.component.sass"],
})
export class ArticleMdItemComponent implements OnInit {
  @Input() article: Article;
  articleDate: string;
  logo: string;

  user: User = null;
  isInHistory: Boolean = false;

  constructor(
    private af: AngularFireAuth,
    private userService: UsersService,
    private articlesService: ArticlesService
  ) {
    moment.locale("es", localization);
    this.checkAuth();
  }

  ngOnInit() {
    this.getLogo();
    this.article.source.toUpperCase();
    this.formatDate();
  }

  checkAuth() {
    this.af.authState.subscribe((res) => {
      if (res && res.uid) {
        this.user = new User();
        this.user.uid = res.uid;
        this.userService.getUser(this.user.uid).subscribe((data) => {
          if (data.payload.exists) {
            this.user = data.payload.data() as User;

            this.checkHistory();
          }
        });
      } else {
        this.user = null;
      }
    });
  }

  checkHistory() {
    if (this.user) {
      const myHistory = new Array<Article>();

      this.user.history.map((item) => {
        this.articlesService.getArticleByUrl(item).subscribe((res) => {
          if (res[0]) {
            const _article = res[0] as Article;
            myHistory.push(_article);

            if (myHistory.some((i) => i.url === this.article.url)) {
              this.isInHistory = true;
            } else {
              this.isInHistory = false;
            }
          }
        });
      });
    }
  }

  verifyArticle() {
    if (!this.isInHistory) {
      this.articlesService
        .getArticleByUrl(this.article.url)
        .subscribe((res) => {
          if (!res[0]) {
            this.articlesService.addArticle(this.article);
            this.saveToHistory();
          } else {
            this.saveToHistory();
          }
        });
    }

    this.checkAuth();
  }

  saveToHistory() {
    this.articlesService.getArticleByUrl(this.article.url).subscribe((data) => {
      const _article = data[0] as Article;
      this.user.history.push(_article.url);

      if (this.user.history.length) {
        this.user.history = this.noRepeat(this.user.history);
      }

      this.userService.updateUser(this.user);
    });
  }

  getLogo() {
    let logoName = this.article.source.split(".")[0].toLowerCase();
    this.logo = "assets/logos/" + logoName + ".png";
  }

  formatDate() {
    this.articleDate = moment(this.article.publishedAt).format("LLLL");
  }

  noRepeat(p: Array<string>): Array<string> {
    return p.filter((item, index) => p.indexOf(item) == index);
  }

}
