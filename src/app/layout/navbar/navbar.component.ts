import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogLoginDialogComponent } from "src/app/shared/components/modals/dialog-login-dialog/dialog-login-dialog.component";
import { User } from "../../data/schema/user";
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.sass"]
})
export class NavbarComponent implements OnInit {
  user: User;

  constructor(public dialog: MatDialog, private afAuth: AngularFireAuth) {}

  ngOnInit() {
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        this.user = new User();
        this.user.email = res.email;
      } else {
        this.user = null;
      }
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogLoginDialogComponent, {
      width: "730px"
    });
  }
}
