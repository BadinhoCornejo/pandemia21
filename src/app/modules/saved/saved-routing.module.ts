import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SavedComponent } from "./page/saved/saved.component";

const routes: Routes = [
  {
    path: "",
    component: SavedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavedRoutingModule {}
