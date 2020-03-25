import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MaterialModule } from "./material.module";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faUser,
  faArrowCircleRight,
  faLink,
  fas
} from "@fortawesome/free-solid-svg-icons";

import { far } from "@fortawesome/free-regular-svg-icons";

import {
  faFacebook,
  faTwitter,
  faFacebookMessenger,
  faPinterest,
  fab
} from "@fortawesome/free-brands-svg-icons";

//COMPONENTS
import { SearchbarComponent } from "./components/searchbar/searchbar.component";
import { QuickProfileComponent } from "./components/quick-profile/quick-profile.component";
import { DialogLoginDialogComponent } from "./components/modals/dialog-login-dialog/dialog-login-dialog.component";
import { DialogSignupDialogComponent } from "./components/modals/dialog-signup-dialog/dialog-signup-dialog.component";

//SERVICES
import { AuthService } from "./services/auth.service";

library.add(
  faUser,
  faArrowCircleRight,
  faLink,
  far,
  fas,
  fab,
  faFacebook,
  faTwitter,
  faFacebookMessenger,
  faPinterest
);

@NgModule({
  declarations: [
    SearchbarComponent,
    QuickProfileComponent,
    DialogLoginDialogComponent,
    DialogSignupDialogComponent
  ],
  entryComponents: [DialogLoginDialogComponent, DialogSignupDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FontAwesomeModule,
    MaterialModule
  ],
  providers: [AuthService],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FontAwesomeModule,
    MaterialModule,
    SearchbarComponent,
    QuickProfileComponent,
    DialogSignupDialogComponent,
    DialogLoginDialogComponent
  ]
})
export class SharedModule {}
