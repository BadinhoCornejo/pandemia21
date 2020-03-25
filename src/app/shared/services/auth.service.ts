import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase/app";

import { User } from "../../data/schema/user";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth) {}

  facebookLogin = () =>
    new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.FacebookAuthProvider();
      this.afAuth.auth.signInWithPopup(provider).then(
        res => {
          resolve(res);
        },
        err => {
          console.log(err);
          reject(err);
        }
      );
    });

  googleLogin = () =>
    new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      this.afAuth.auth.signInWithPopup(provider).then(
        res => {
          resolve(res);
        },
        err => {
          console.log(err);
          reject(err);
        }
      );
    });

  emailLogin = (user: User) =>
    new Promise<any>((resolve, reject) => {
      this.afAuth.auth
        .signInWithEmailAndPassword(user.email, user.usrPassword)
        .then(
          res => {
            resolve(res);
          },
          err => {
            console.log(err);
            reject(err);
          }
        );
    });

  signUp = (user: User) =>
    new Promise<any>((resolve, reject) => {
      this.afAuth.auth
        .createUserWithEmailAndPassword(user.email, user.usrPassword)
        .then(
          res => {
            resolve(res);
          },
          err => {
            console.log(err);
            reject(err);
          }
        );
    });
}
