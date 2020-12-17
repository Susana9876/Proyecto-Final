import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/Hero.services';
import { Router } from '@angular/router';
import { InsertarService } from '../../services/insertar.service';

// Decorador:
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  tabla: any = [];
  constructor( private _aRouter: Router, private insertarService: InsertarService) { }

  ArrayHeros: any = [];

  // Se ejecuta cuando se termina de renderizar el componente.
  ngOnInit(): void {
    this.insertarService
      .obtenerinsertar()
      .then((data: any) => {
        this.tabla = data;      
        console.log(this.tabla);
      })
      .catch((error) => {
        console.log('pues falló');
      });
  }

  Navegar(index){
    console.log(index);
    this._aRouter.navigate(['../hero',index])
  }

}