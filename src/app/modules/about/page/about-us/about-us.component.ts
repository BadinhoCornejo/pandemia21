import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.sass"]
})
export class AboutUsComponent implements OnInit {
  body: any = {
    title: "11 de marzo de 2020",
    content: [
      {
        paragraph: `<p>Nuestra civilización se ve amenazada por un nuevo virus. Sistemas de salud en países de primer mundo como Italia y España se encuentran al borde del colapso, miles de fallecidos a nivel global. El inicio de esta nueva década nos sorprendería con una situación casi apocalíptica.</p>`,
        attachments: []
      },
      {
        paragraph: `<p>El <strong>COVID-19</strong>, también conocido como <strong><i>coronavirus</i></strong>, fue identificado por primera vez en la ciudad de Wuhan, China, el 1 de diciembre de 2019; y desde entonces, su aumento ha sido incontrolable.</p>`,
        attachments: []
      },
      {
        paragraph: `
        <p>Alcanzando alarmantes cifras de infectados en Europa, y atacando a sus primeras víctimas en nuestro lado del mundo, la Organización Mundial de la Salud calificó como pandemia al respectivo virus. La desesperación y el pánico de la población mundial había desatado el caos en cada rincón del planeta.</p>`,
        attachments: [
          {
            type: "image",
            path: "assets/img/brian-mcgowan-gkpszAElZf8-unsplash.jpg",
            alt:
              "Double exposure of global Coronavirus COVID-19 cases (March 17, 2020).",
            source: "Photo by Brian McGowan on Unsplash"
          }
        ]
      },
      {
        paragraph: `<p>Países en estado de emergencia, actividades paralizadas e incontenibles saqueos, marcaron el inicio de una cuarentena global, situación que nos obliga a permanecer en aislamiento con el fin de detener el crecimiento de este virus.</p>`,
        attachments: []
      },
      {
        paragraph: `<p>Muchos medios sociales con la finalidad de aprovecharse de la situación, han sembrado pánico colectivo en la población publicando artículos de fuentes poco confiables, y en efecto, falsas.</p>`,
        attachments: []
      },
      {
        paragraph: `<p><strong>PANDEMIA21</strong> nace con el propósito de acercar a todos la mejor información relacionada a la pandemia que estamos viviendo, recopilando las noticias de los sitios más confiables en toda la web.</p>`,
        attachments: [
          {
            type: "image",
            path: "assets/img/pandemia21-logo.png",
            alt: "Pandemia21 logo",
            source: "Pandemia21"
          }
        ]
      }
    ]
  };

  constructor() {}

  ngOnInit() {}
}
