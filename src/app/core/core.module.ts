import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthGuard } from "./guard/auth.guard";
import { throwIfAlreadyLoaded } from "./guard/module-import.guard";

@NgModule({
  declarations: [],
  providers: [AuthGuard],
  imports: [CommonModule],
})
export class CoreModule {
  //Prevent re-importing the core module elsewhere.
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, "CoreModule");
  }
}
