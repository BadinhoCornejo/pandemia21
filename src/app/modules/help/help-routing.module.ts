import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HelpComponent } from "./page/help/help.component";

const routes: Routes = [
  {
    path: "",
    component: HelpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpRoutingModule {}
