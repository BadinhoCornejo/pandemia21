import { Component, OnInit } from "@angular/core";

import { SavedContextService } from "../../../../shared/services/saved-context.service";

import { Article } from "../../../../data/schema/article";

@Component({
  selector: "app-saved",
  templateUrl: "./saved.component.html",
  styleUrls: ["./saved.component.sass"],
})
export class SavedComponent implements OnInit {
  news: Array<Article>;

  constructor(private savedContext: SavedContextService) {
    this.loadArticles();
  }

  ngOnInit() {}

  loadArticles() {
    this.savedContext.currentNews.subscribe(
      (value: any) => (this.news = value as Array<Article>),
      (err: any) => console.error(err)
    );
  }
}
