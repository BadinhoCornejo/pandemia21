import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class NewsService {
  headers = new HttpHeaders({
    "Access-Control-Allow-Origin": "*",
  });
  constructor(private http: HttpClient) {}

  getNews = (url: string, page: any) =>
    this.http.get(`${url}/${page}`, { headers: this.headers });
}
