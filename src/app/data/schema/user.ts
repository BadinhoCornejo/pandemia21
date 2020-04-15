import { Article } from "./article";

export class User {
  uid: string;
  email: string;
  name: string;
  photoUrl: string;
  usrPassword: string;
  history: Array<string>;
  saved: Array<string>;
}
