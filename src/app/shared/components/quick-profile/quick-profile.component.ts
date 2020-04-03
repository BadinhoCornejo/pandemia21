import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from "../../../data/schema/user";

@Component({
  selector: "app-quick-profile",
  templateUrl: "./quick-profile.component.html",
  styleUrls: ["./quick-profile.component.sass"]
})
export class QuickProfileComponent implements OnInit {
  user: User;

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(res => {
      this.user = new User();
      this.user.photoUrl = res.photoURL;
    });
  }

  ngOnInit() {}

  signOut(): void {
    this.afAuth.auth.signOut();
  }
}
