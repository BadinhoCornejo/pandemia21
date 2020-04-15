import { Component, OnInit, Input } from "@angular/core";

import { AngularFireAuth } from "@angular/fire/auth";
import { UsersService } from "../../../../shared/services/users.service";

import { Article } from "../../../../data/schema/article";
import { User } from "../../../../data/schema/user";

import * as moment from "moment";
import localization from "moment/locale/es";

@Component({
  selector: "app-article-item",
  templateUrl: "./article-item.component.html",
  styleUrls: ["./article-item.component.sass"],
})
export class ArticleItemComponent implements OnInit {
  @Input() article: Article;
  articleDate: string;
  logo: string;

  user: User = null;
  isSaved: Boolean;

  constructor(private af: AngularFireAuth, private userService: UsersService) {
    this.checkAuth();
  }

  ngOnInit() {
    moment.locale("es", localization);

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
          }
        });
      } else {
        this.user = null;
      }
    });
  }

  getLogo() {
    let logoName = this.article.source.split(".")[0].toLowerCase();
    this.logo = "assets/logos/" + logoName + ".png";
  }

  formatDate() {
    this.articleDate = moment(this.article.publishedAt).format("LLLL");
  }
}
