import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { FormGroup, FormBuilder, Validators, Form } from "@angular/forms";

import { UsersService } from "../../../../shared/services/users.service";
import { SavedContextService } from "../../../../shared/services/saved-context.service";
import { HistoryContextService } from "../../../../shared/services/history-context.service";

import { Article } from "../../../../data/schema/article";
import { User } from "../../../../data/schema/user";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.sass"],
})
export class ProfileComponent implements OnInit {
  user: User;
  form: FormGroup;
  submitted: Boolean = false;
  userFeedback: string = "";
  edit: Boolean = false;

  history: Array<Article>;
  saved: Array<Article>;

  constructor(
    private afAuth: AngularFireAuth,
    private usersService: UsersService,
    private historyContext: HistoryContextService,
    private savedContext: SavedContextService,
    private formBuilder: FormBuilder
  ) {
    this.afAuth.authState.subscribe((res) => {
      this.user = new User();

      this.usersService.getUser(res.uid).subscribe((_user) => {
        this.user = _user.payload.data() as User;
        this.user.photoUrl = res.photoURL;
      });
    });

    this.form = formBuilder.group({
      username: ["", [Validators.required]],
    });

    this.loadHistory();
    this.loadSaved();
  }

  ngOnInit() {}

  get f() {
    return this.form.controls;
  }

  isEdit(): void {
    this.edit = true;
  }

  loadHistory() {
    this.historyContext.currentNews.subscribe(
      (value: any) => (this.history = value as Array<Article>),
      (err: any) => console.log(err)
    );
  }

  loadSaved() {
    this.savedContext.currentNews.subscribe(
      (value: any) => (this.saved = value as Array<Article>),
      (err: any) => console.log(err)
    );
  }

  editUsername(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.user.name = this.form.value.username;
    this.user.photoUrl = this.user.photoUrl ? this.user.photoUrl : "";

    this.usersService.updateUser(this.user);
    this.edit = false;
  }
}
