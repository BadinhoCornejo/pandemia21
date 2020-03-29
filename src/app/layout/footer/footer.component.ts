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
      content: `Nuestro propósito es acercar a todos la mejor información relacionada a la pandemia que estamos viviendo, recopilando las noticias de los sitios más confiables en toda la web.`
    },
    {
      title: "Misión",
      content: `Nuestra misión es recopilar y organizar la información más confiable relacionada al tema del coronavirus, con el fin de acercarla a todos los habitantes del Perú y habla hispana.`
    },
    {
      title: "Visión",
      content: `Nuestra visión es distribuir la información a todas las personas de habla hispana en el Perú y alrededor del mundo durante el periodo de emergencia.`
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
