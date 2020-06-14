import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, Form } from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { DialogSignupDialogComponent } from "../dialog-signup-dialog/dialog-signup-dialog.component";
import { Router } from "@angular/router";
import { AuthService } from "../../../services/auth.service";
import { User } from "../../../../data/schema/user";

import { ErrorMessages as errorMessages } from "../../../resources/auth-feedback-messages.js";

@Component({
  selector: "dialog-login-dialog",
  templateUrl: "./dialog-login-dialog.component.html",
  styleUrls: ["./dialog-login-dialog.component.sass"],
})
export class DialogLoginDialogComponent implements OnInit {
  form: FormGroup;
  submitted: Boolean = false;
  userFeedback: string = "";
  user: User;
  hide = false;

  constructor(
    public dialogRef: MatDialogRef<DialogLoginDialogComponent>,
    public dialog: MatDialog,
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      usrPassword: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {}

  get f() {
    return this.form.controls;
  }

  facebookLogin(): void {
    this.authService
      .facebookLogin()
      .then((res) => {
        this.router.navigateByUrl("");
        this.onNoClick();
      })
      .catch((err) => {
        let errorCode = errorMessages.find((i) => i.errorCode === err.code);

        if (errorCode) {
          this.userFeedback = errorCode.message;
        } else {
          this.userFeedback =
            "Ups! Algo salió mal. Por favor, intenta nuevamente.";
        }
      });
  }

  googleLogin(): void {
    this.authService
      .googleLogin()
      .then((res) => {
        this.router.navigateByUrl("");
        this.onNoClick();
      })
      .catch((err) => {
        let errorCode = errorMessages.find((i) => i.errorCode === err.code);

        if (errorCode) {
          this.userFeedback = errorCode.message;
        } else {
          this.userFeedback =
            "Ups! Algo salió mal. Por favor, intenta nuevamente.";
        }
      });
  }

  emailLogin(form): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.user = new User();
    this.user.email = this.form.value.email;
    this.user.usrPassword = this.form.value.usrPassword;

    this.authService
      .emailLogin(this.user)
      .then((res) => {
        this.router.navigateByUrl("");
        this.onNoClick();
      })
      .catch((err) => {
        let errorCode = errorMessages.find((i) => i.errorCode === err.code);

        if (errorCode) {
          this.userFeedback = errorCode.message;
        } else {
          this.userFeedback =
            "Ups! Algo salió mal. Por favor, intenta nuevamente.";
        }
      });
  }

  openSignup(): void {
    const dialogRef = this.dialog.open(DialogSignupDialogComponent, {
      width: "360px",
      maxWidth: "360px",
    });

    this.onNoClick();
  }

  onNoClick = () => this.dialogRef.close();
}
