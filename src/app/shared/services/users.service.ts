import { Injectable } from "@angular/core";

import { AngularFirestore } from "@angular/fire/firestore";

import { User } from "../../data/schema/user";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(private db: AngularFirestore) {}

  getUser(uid: string) {
    return this.db.collection("users").doc(uid).snapshotChanges();
  }

  addUser(user: User) {
    this.db.collection("users").doc(user.uid).set(Object.assign({}, user));
  }

  updateUser(user: User) {
    this.db
      .collection("users")
      .doc(user.uid)
      .set(Object.assign({}, user), { merge: true });
  }
}
