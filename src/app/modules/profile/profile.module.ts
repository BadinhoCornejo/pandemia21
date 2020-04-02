import { NgModule } from "@angular/core";

import { SharedModule } from "../../shared/shared.module";

import { ProfileRoutingModule } from "./profile-routing.module";
import { ProfileComponent } from "./page/profile/profile.component";

@NgModule({
  declarations: [ProfileComponent],
  imports: [SharedModule, ProfileRoutingModule]
})
export class ProfileModule {}
