import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: "app-quick-profile",
  templateUrl: "./quick-profile.component.html",
  styleUrls: ["./quick-profile.component.sass"]
})
export class QuickProfileComponent implements OnInit {
  constructor(private afAuth: AngularFireAuth) {}

  ngOnInit() {}

  signOut(): void {
    this.afAuth.auth.signOut();
  }
}
