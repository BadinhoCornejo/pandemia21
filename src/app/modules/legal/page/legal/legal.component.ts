import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-legal",
  templateUrl: "./legal.component.html",
  styleUrls: ["./legal.component.sass"]
})
export class LegalComponent implements OnInit {
  content: Array<any> = [
    {
      subtitle: "",
      paragraphs: [
        `
        <p>
          Los siguientes términos y condiciones son un acuerdo entre
          <strong>Pandemia21</strong> y tú. Estos están presentes tanto 
          en nuestro sitio web como en nuestra aplicación móvil. 
        </p>
      `,
        `
        <p>
          Al usar nuestras aplicaciones, estás aceptando estos términos.
          Pandemia21 está en la condición de cambiar estos términos en cualquier momento,
          Si no estás de acuerdo con las siguientes condiciones, no puedes hacer uso de nuestra 
          aplicación
        </p>
      `
      ]
    },
    {
      subtitle: "Derechos del contenido",
      paragraphs: [
        `
        <p>
          Los derechos del contenido que se presenta en <strong>PANDEMIA21</strong> pertenecen únicamente a las fuentes
          citadas de la información. Estas sólo son mostradas con el mero propósito de informar a la población
          sobre la actual pandemia que está azotando el mundo. Para más información puede visitar directamente las 
          notas desde sus fuentes principales y consultar sus derechos correspondientes.
        </p>
      `
      ]
    },
    {
      subtitle: "Seguridad y privacidad",
      paragraphs: [
        `
        <p>
          <strong>PANDEMIA21</strong> se compromete a mantener la integridad y seguridad de tus datos. Tus datos personales
          solo son utilizados para garantizarte la mejor experiencia en la aplicación. Pandemia21 no venderá tu información a 
          terceros.
        </p>
      `
      ]
    }
  ];

  constructor() {}

  ngOnInit() {}
}
