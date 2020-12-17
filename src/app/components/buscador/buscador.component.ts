import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/services/Hero.services';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  constructor( private _aRoute: ActivatedRoute, private _heroService: HeroService ) { }
  Resultados: any = [];
  strBusqueda: string = '';

  // Se ejecuta cuando se termina de reenderizar el componente
  ngOnInit(): void {
    // Obtener parámetros de la ruta activa
    this._aRoute.params.subscribe(params => {
      this.strBusqueda = params['termino'];
      this.Resultados = this._heroService.searchHeros(params['termino']);
      console.log(this.Resultados);
    });
  }

}
