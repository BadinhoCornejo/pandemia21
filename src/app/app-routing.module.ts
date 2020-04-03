import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContentLayoutComponent } from "./layout/content-layout/content-layout.component";

const routes: Routes = [
  {
    path: "",
    component: ContentLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./modules/home/home.module").then(m => m.HomeModule)
      },
      {
        path: "me",
        loadChildren: () =>
          import("./modules/profile/profile.module").then(m => m.ProfileModule)
      },
      {
        path: "about",
        loadChildren: () =>
          import("./modules/about/about.module").then(m => m.AboutModule)
      },
      {
        path: "help",
        loadChildren: () =>
          import("./modules/help/help.module").then(m => m.HelpModule)
      },
      {
        path: "legal",
        loadChildren: () =>
          import("./modules/legal/legal.module").then(m => m.LegalModule)
      },
      {
        path: "**",
        loadChildren: () =>
          import("./modules/not-found/not-found.module").then(
            m => m.NotFoundModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
