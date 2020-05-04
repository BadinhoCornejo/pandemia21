import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, Form } from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { DialogLoginDialogComponent } from "../dialog-login-dialog/dialog-login-dialog.component";
import { Router } from "@angular/router";
import { AuthService } from "../../../services/auth.service";
import { User } from "../../../../data/schema/user";

import { ErrorMessages as errorMessages } from "../../../resources/auth-feedback-messages.js";

@Component({
  selector: "dialog-signup-dialog",
  templateUrl: "./dialog-signup-dialog.component.html",
  styleUrls: ["./dialog-signup-dialog.component.sass"],
})
export class DialogSignupDialogComponent implements OnInit {
  form: FormGroup;
  submitted: Boolean = false;
  userFeedback: string = "";
  user: User;

  constructor(
    public dialogRef: MatDialogRef<DialogSignupDialogComponent>,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
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

  openLogin(): void {
    const dialogRef = this.dialog.open(DialogLoginDialogComponent, {
      width: "auto",
    });

    this.onNoClick();
  }

  signUp(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.user = new User();

    this.user.email = this.form.value.email;
    this.user.usrPassword = this.form.value.usrPassword;

    this.authService
      .signUp(this.user)
      .then((res) => {
        this.router.navigateByUrl("");
        this.onNoClick();
      })
      .catch((err) => {
        console.log(err.code);
        let errorCode = errorMessages.find((i) => i.errorCode === err.code);

        if (errorCode) {
          this.userFeedback = errorCode.message;
        } else {
          this.userFeedback =
            "Ups! Algo salió mal. Por favor, intenta nuevamente.";
        }
      });
  }

  onNoClick = () => this.dialogRef.close();
}
