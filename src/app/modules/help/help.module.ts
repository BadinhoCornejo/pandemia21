import { NgModule } from "@angular/core";

import { SharedModule } from "../../shared/shared.module";
import { HelpRoutingModule } from "./help-routing.module";

import { HelpComponent } from "./page/help/help.component";

@NgModule({
  declarations: [HelpComponent],
  imports: [HelpRoutingModule, SharedModule]
})
export class HelpModule {}
