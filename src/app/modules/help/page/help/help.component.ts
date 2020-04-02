import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-help",
  templateUrl: "./help.component.html",
  styleUrls: ["./help.component.sass"]
})
export class HelpComponent implements OnInit {

  pandemiaEmail: string = "pandemia21@gmail.com"

  constructor() {}

  ngOnInit() {}
}
