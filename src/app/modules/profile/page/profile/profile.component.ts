import { Component, OnInit, DoCheck } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { FormGroup, FormBuilder, Validators, Form } from "@angular/forms";

import { UsersService } from "../../../../shared/services/users.service";
import { SavedContextService } from "../../../../shared/services/saved-context.service";
import { HistoryContextService } from "../../../../shared/services/history-context.service";
import { SearchbarContextService } from "../../../../shared/services/searchbar-context.service";

import { Article } from "../../../../data/schema/article";
import { User } from "../../../../data/schema/user";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.sass"],
})
export class ProfileComponent implements OnInit, DoCheck {
  user: User;
  form: FormGroup;
  submitted: Boolean = false;
  userFeedback: string = "";
  edit: Boolean = false;

  history: Array<Article>;
  historyBackup: Array<Article>;
  saved: Array<Article>;
  savedBackUp: Array<Article>;

  constructor(
    private afAuth: AngularFireAuth,
    private usersService: UsersService,
    private historyContext: HistoryContextService,
    private savedContext: SavedContextService,
    private searchBarContext: SearchbarContextService,
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

  ngDoCheck(): void {
    this.searchBarContext.currentSearchValue.subscribe(
      (value: any) => {
        if (value && value.length > 0) {
          this.history = this.historyBackup.filter(
            (article) =>
              article.title.toLowerCase().includes(value.toLowerCase()) ||
              article.source.toLowerCase().includes(value.toLowerCase())
          );
          this.saved = this.savedBackUp.filter(
            (article) =>
              article.title.toLowerCase().includes(value.toLowerCase()) ||
              article.source.toLowerCase().includes(value.toLowerCase())
          );
        } else {
          this.history = this.historyBackup;
          this.saved = this.savedBackUp;
        }
      },
      (err: any) => console.error(err)
    );
  }

  get f() {
    return this.form.controls;
  }

  isEdit(): void {
    this.edit = true;
  }

  loadHistory() {
    this.historyContext.currentNews.subscribe(
      (value: any) => {
        this.history = value as Array<Article>;
        this.historyBackup = this.history;
      },
      (err: any) => console.log(err)
    );
  }

  loadSaved() {
    this.savedContext.currentNews.subscribe(
      (value: any) => {
        this.saved = value as Array<Article>;
        this.savedBackUp = this.saved;
      },
      (err: any) => console.log(err)
    );
  }

  editUsername(form): void {
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
