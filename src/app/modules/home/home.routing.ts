import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./page/home/home.component";
import { ArticleDetailsComponent } from "./page/article-details/article-details.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "coronavirus/:id",
    component: ArticleDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
