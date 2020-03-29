import { NgModule } from "@angular/core";

import { HomeRoutingModule } from "./home.routing";

import { SharedModule } from "../../shared/shared.module";

import { HomeComponent } from "./page/home/home.component";
import { ArticleDetailsComponent } from "./page/article-details/article-details.component";
import { ArticleItemComponent } from "./page/article-item/article-item.component";

@NgModule({
  declarations: [HomeComponent, ArticleItemComponent, ArticleDetailsComponent],
  imports: [HomeRoutingModule, SharedModule],
  exports: [],
  providers: []
})
export class HomeModule {}
