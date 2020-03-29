import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AboutUsComponent } from "./page/about-us/about-us.component";

const routes: Routes = [
  {
    path: "",
    component: AboutUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {}
