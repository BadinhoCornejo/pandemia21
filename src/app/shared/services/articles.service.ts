import { Injectable } from "@angular/core";

import { AngularFirestore } from "@angular/fire/firestore";

import { Article } from "../../data/schema/article";

@Injectable({
  providedIn: "root",
})
export class ArticlesService {
  constructor(private db: AngularFirestore) {}

  getArticleByUrl(url: string) {
    return this.db.collection("articles", (ref) => ref.where("url", "==", url)).valueChanges();
  }

  addArticle(article: Article) {
    this.db.collection("articles").add(Object.assign({}, article));
  }
}
