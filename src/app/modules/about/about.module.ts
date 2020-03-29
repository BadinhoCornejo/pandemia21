import { NgModule } from "@angular/core";

import { AboutUsComponent } from "./page/about-us/about-us.component";

import { SharedModule } from "../../shared/shared.module";

import { AboutRoutingModule } from "./about-routing.module";

@NgModule({
  declarations: [AboutUsComponent],
  imports: [AboutRoutingModule, SharedModule]
})
export class AboutModule {}
