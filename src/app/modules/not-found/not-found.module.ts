import { NgModule } from "@angular/core";

import { SharedModule } from "../../shared/shared.module";

import { NotFoundRoutingModule } from "./not-found-routing.module";
import { NotFoundComponent } from "./page/not-found/not-found.component";

@NgModule({
  declarations: [NotFoundComponent],
  imports: [SharedModule, NotFoundRoutingModule]
})
export class NotFoundModule {}
