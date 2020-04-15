import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogLoginDialogComponent } from "src/app/shared/components/modals/dialog-login-dialog/dialog-login-dialog.component";
import { User } from "../../data/schema/user";
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.sass"],
  host: {
    "(window:resize)": "onResize($event)",
  },
})
export class NavbarComponent implements OnInit {
  user: User = null;
  showBrand: Boolean = true;
  showSearchBar: Boolean;
  isMobile: Boolean;

  constructor(public dialog: MatDialog, private afAuth: AngularFireAuth) {}

  ngOnInit() {
    this.checkAuth();

    window.innerWidth <= 504 ? (this.isMobile = true) : (this.isMobile = false);

    this.manageInitState();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogLoginDialogComponent, {
      width: "auto",
    });
  }

  checkAuth(): void {
    this.afAuth.authState.subscribe((res) => {
      if (res && res.uid) {
        this.user = new User();
        this.user.email = res.email;
      } else {
        this.user = null;
      }
    });
  }

  //Responsive
  onResize(event) {
    if (event.target.innerWidth <= 504) {
      this.showSearchBar = false;
      this.isMobile = true;
    } else {
      this.isMobile = false;
      this.showBrand = true;
      this.showSearchBar = true;
    }
  }

  manageInitState(): void {
    if (this.isMobile) {
      this.showSearchBar = false;
    } else {
      this.showSearchBar = true;
    }
  }

  triggerSearchBar(): void {
    console.log("Hidden brand");
    
    this.showBrand = !this.showBrand;
    this.showSearchBar = !this.showSearchBar;
  }
}
