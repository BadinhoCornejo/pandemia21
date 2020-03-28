import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.sass"]
})
export class FooterComponent implements OnInit {
  aboutList: Array<any> = [
    {
      title: "Nuestro propósito",
      content: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
  diam.`
    },
    {
      title: "Misión",
      content: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
  diam.`
    },
    {
      title: "Visión",
      content: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
  diam.`
    }
  ];

  linksList: Array<any> = [
    {
      text: "Nosotros",
      link: "/about"
    },
    {
      text: "Ayuda",
      link: "/help"
    },
    {
      text: "Legal",
      link: "/legal"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
