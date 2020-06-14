import { Component, OnInit, DoCheck } from "@angular/core";

import { SavedContextService } from "../../../../shared/services/saved-context.service";
import { SearchbarContextService } from "../../../../shared/services/searchbar-context.service";

import { Article } from "../../../../data/schema/article";

@Component({
  selector: "app-saved",
  templateUrl: "./saved.component.html",
  styleUrls: ["./saved.component.sass"],
})
export class SavedComponent implements OnInit, DoCheck {
  news: Array<Article>;
  newsBackUp: Array<Article>;

  constructor(
    private savedContext: SavedContextService,
    private searchBarContext: SearchbarContextService
  ) {
    this.loadArticles();
  }

  ngOnInit() {}

  ngDoCheck(): void {
    this.searchBarContext.currentSearchValue.subscribe(
      (value: any) => {
        if (value && value.length > 0) {
          this.news = this.newsBackUp.filter(
            (article) =>
              article.title.toLowerCase().includes(value.toLowerCase()) ||
              article.source.toLowerCase().includes(value.toLowerCase())
          );
        } else {
          this.news = this.newsBackUp;
        }
      },
      (err: any) => console.error(err)
    );
  }

  loadArticles() {
    this.savedContext.currentNews.subscribe(
      (value: any) => {
        this.news = value as Array<Article>;
        this.newsBackUp = this.news;
      },
      (err: any) => console.error(err)
    );
  }
}
