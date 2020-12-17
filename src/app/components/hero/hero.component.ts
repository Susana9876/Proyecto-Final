import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HeroService } from 'src/app/services/Hero.services';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { InsertarService } from '../../services/insertar.service';
import Swal from 'sweetalert2';
import { EventEmitter } from 'events';
import { HeroesModel } from '../../models/heroes';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
});

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements OnInit {
  @Output() salida = new EventEmitter();
  HeroeM: HeroesModel = new HeroesModel();
  hero: any = {};
  idHeroeActualizar: string;
  constructor( private aRoute:ActivatedRoute, private _aRouter: Router, private insertarService: InsertarService) {
  }
  
  ngOnInit(): void {
    this.aRoute.params.subscribe(params =>{
    this.insertarService
      .getHero(params['id'])
      .then((data: any) => {
        this.hero = data;      
        console.log(this.hero);
      })
      .catch((error) => {
        console.log('pues falló');
      });
    })
  }
  
  actualizar(forma: NgForm) {
    this.insertarService
      .actualizarinsertar(this.idHeroeActualizar, this.HeroeM)
      .then((usuario: any) => {
        Toast.fire(usuario.msg, '', 'success');
        forma.reset();
        // this.salida.emit();
      })
      .catch((err: any) => {
        Toast.fire(err.console.error.msg, '', 'error');
      });
  }

  dispararActualizar(idHero: string) {
    this.idHeroeActualizar = idHero;
    console.log(idHero);
  }

  elimiar(idHero: string) {
    this.idHeroeActualizar = idHero;
    console.log(idHero);
    this.insertarService
      .eliminarHeroe(idHero)
      .then((heroe: any) => {
        Toast.fire(heroe.msg, 'la disponibilidad ahora es falsa', 'success');
        // this.salida.emit();
      })
      .catch((err: any) => {
        Toast.fire(err.console.error.msg, 'no se pudo eliminar', 'error');
      });
  }
  Regresar(){
    this._aRouter.navigate(['../heros'])
  }

}

