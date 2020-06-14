import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ScrollingModule } from "@angular/cdk/scrolling";

import { MaterialModule } from "./material.module";

import { ToastrModule } from "ngx-toastr";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faUser,
  faArrowCircleRight,
  faLink,
  fas,
} from "@fortawesome/free-solid-svg-icons";

import { far } from "@fortawesome/free-regular-svg-icons";

import {
  faFacebook,
  faTwitter,
  faFacebookMessenger,
  faPinterest,
  fab,
} from "@fortawesome/free-brands-svg-icons";

//COMPONENTS
import { SearchbarComponent } from "./components/searchbar/searchbar.component";
import { QuickProfileComponent } from "./components/quick-profile/quick-profile.component";
import { DialogLoginDialogComponent } from "./components/modals/dialog-login-dialog/dialog-login-dialog.component";
import { DialogSignupDialogComponent } from "./components/modals/dialog-signup-dialog/dialog-signup-dialog.component";
import { BookmarkComponent } from "./components/bookmark/bookmark.component";
import { ArticleItemComponent } from "./components/article-item/article-item.component";
import { ArticleMdItemComponent } from "./components/article-md-item/article-md-item.component";
import { ProgressComponent } from "./components/progress/progress.component";
import { ScrollTopComponent } from "./components/scroll-top/scroll-top.component";

//SERVICES
import { AuthService } from "./services/auth.service";
import { NewsService } from "./services/news.service";
import { ArticlesService } from "./services/articles.service";
import { UsersService } from "./services/users.service";

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
    DialogSignupDialogComponent,
    BookmarkComponent,
    ArticleItemComponent,
    ArticleMdItemComponent,
    ProgressComponent,
    ScrollTopComponent,
  ],
  entryComponents: [DialogLoginDialogComponent, DialogSignupDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FontAwesomeModule,
    MaterialModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: "toast-top-right",
      preventDuplicates: true,
    }),
    ScrollingModule,
  ],
  providers: [AuthService, NewsService, UsersService, ArticlesService],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FontAwesomeModule,
    MaterialModule,
    ToastrModule,
    ScrollingModule,
    SearchbarComponent,
    QuickProfileComponent,
    DialogSignupDialogComponent,
    DialogLoginDialogComponent,
    BookmarkComponent,
    ArticleItemComponent,
    ArticleMdItemComponent,
    ProgressComponent,
    ScrollTopComponent,
  ],
})
export class SharedModule {}
