import { NgModule } from "@angular/core";

import { HomeRoutingModule } from "./home.routing";

import { SharedModule } from "../../shared/shared.module";

import { HomeComponent } from "./page/home/home.component";
import { ArticleDetailsComponent } from "./page/article-details/article-details.component";

@NgModule({
  declarations: [HomeComponent, ArticleDetailsComponent],
  imports: [HomeRoutingModule, SharedModule],
})
export class HomeModule {}
