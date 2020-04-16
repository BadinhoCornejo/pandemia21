import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SavedRoutingModule } from "./saved-routing.module";
import { SharedModule } from "../../shared/shared.module";

import { SavedComponent } from "./page/saved/saved.component";

@NgModule({
  declarations: [SavedComponent],
  imports: [CommonModule, SharedModule, SavedRoutingModule],
})
export class SavedModule {}
