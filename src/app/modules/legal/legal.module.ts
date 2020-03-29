import { NgModule } from "@angular/core";

import { SharedModule } from "../../shared/shared.module";
import { LegalRoutingModule } from "./legal-routing.module";

import { LegalComponent } from "./page/legal/legal.component";

@NgModule({
  declarations: [LegalComponent],
  imports: [SharedModule, LegalRoutingModule]
})
export class LegalModule {}
