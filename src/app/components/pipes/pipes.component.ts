import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: [
  ]
})
export class PipesComponent implements OnInit {

  Nombre = 'Susana Alba Najera';
  // NombreAlterno = 'SuSaNa AlBa NaJeRa';
  videoUrl = 'https://www.youtube.com/embed/zELJwqVsHh4?start=80'
  arrayPrueba = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'K'];
  mostrar = true;
  PI = Math.PI;
  Fecha = new Date;
  Precio = 199.99;

  constructor() { }

  ngOnInit(): void {
  }

}