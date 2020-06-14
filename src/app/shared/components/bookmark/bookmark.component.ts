import { Component, OnInit, Input } from "@angular/core";

import { AngularFireAuth } from "@angular/fire/auth";
import { UsersService } from "../../services/users.service";
import { ArticlesService } from "../../services/articles.service";
import { SavedContextService } from "../../services/saved-context.service";

import { MatSnackBar } from "@angular/material/snack-bar";

import { Article } from "../../../data/schema/article";
import { User } from "../../../data/schema/user";

@Component({
  selector: "app-bookmark",
  templateUrl: "./bookmark.component.html",
  styleUrls: ["./bookmark.component.sass"],
})
export class BookmarkComponent implements OnInit {
  @Input() article: Article;

  user: User = new User();
  isSaved: Boolean;

  constructor(
    private af: AngularFireAuth,
    private userService: UsersService,
    private articlesService: ArticlesService,
    private savedNewsContext: SavedContextService,
    private _snackBar: MatSnackBar
  ) {
    this.checkAuth();
  }

  ngOnInit() {}

  checkAuth() {
    this.af.authState.subscribe((res) => {
      if (res && res.uid) {
        this.user = new User();
        this.user.uid = res.uid;
        this.userService.getUser(this.user.uid).subscribe((data) => {
          if (data.payload.exists) {
            this.user = data.payload.data() as User;

            this.checkSaved();
          }
        });
      } else {
        this.user = null;
      }
    });
  }

  checkSaved() {
    if (this.user.saved.length) {
      const saved = new Array<Article>();

      this.user.saved.map((item) => {
        this.articlesService.getArticleByUrl(item).subscribe((res) => {
          if (res[0]) {
            const _article = res[0] as Article;
            saved.push(_article);

            if (saved.some((i) => i.url === this.article.url)) {
              this.isSaved = true;
            } else {
              this.isSaved = false;
            }
          }
        });
      });
    }
  }

  verifyArticle() {
    if (!this.isSaved) {
      this.articlesService
        .getArticleByUrl(this.article.url)
        .subscribe((res) => {
          if (!res[0]) {
            this.articlesService.addArticle(this.article);
            this.saveArticle();
          } else {
            this.saveArticle();
          }
        });
    } else {
      this.unSaveArticle();
    }

    this.checkAuth();
  }

  saveArticle() {
    this.articlesService.getArticleByUrl(this.article.url).subscribe((data) => {
      const _article = data[0] as Article;
      this.user.saved.push(_article.url);

      if (this.user.saved.length) {
        this.user.saved = this.noRepeat(this.user.saved);
      }

      this.userService.updateUser(this.user);
    });
    this.isSaved = true;
    this.openSnackBar("Se guardó una noticia", "Cerrar");
  }

  unSaveArticle() {
    let index = this.user.saved.indexOf(this.article.url);

    if (index > -1) {
      this.user.saved.splice(index, 1);
    }
    this.isSaved = false;
    this.userService.updateUser(this.user);
  }

  noRepeat(p: Array<string>): Array<string> {
    return p.filter((item, index) => p.indexOf(item) == index);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
