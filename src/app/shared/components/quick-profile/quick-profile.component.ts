import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from "../../../data/schema/user";
import { Router } from "@angular/router";

import { UsersService } from "../../services/users.service";

@Component({
  selector: "app-quick-profile",
  templateUrl: "./quick-profile.component.html",
  styleUrls: ["./quick-profile.component.sass"],
})
export class QuickProfileComponent implements OnInit {
  user: User = new User();

  constructor(
    private usersService: UsersService,
    private router: Router,
    private afAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe((res) => {
      if (res) {
        this.user.name = res.displayName;
        this.user.uid = res.uid;
        this.user.email = res.email;
        this.user.photoUrl = res.photoURL;
        this.user.saved = [];
        this.user.history = [];

        this.usersService.getUser(this.user.uid).subscribe((data) => {
          if (!data.payload.exists) {
            this.usersService.addUser(this.user);
          }
        });
      }
    });
  }

  ngOnInit() {}

  signOut(): void {
    this.afAuth.auth.signOut();
    window.location.reload();
  }
}
