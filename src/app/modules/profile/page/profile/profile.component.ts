import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";

import { User } from "../../../../data/schema/user";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.sass"]
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(res => {
      this.user = new User();

      this.user.email = res.email;
      this.user.name = res.displayName;
      this.user.photoUrl = res.photoURL;
    });
  }

  ngOnInit() {}
}
