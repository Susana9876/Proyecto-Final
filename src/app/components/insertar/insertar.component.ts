import { Component, OnInit, Output } from '@angular/core';
import { InsertarService } from '../../services/insertar.service';
import { HeroesModel } from '../../models/heroes';
import { NgForm } from '@angular/forms';
import { EventEmitter } from 'events';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
});

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.css']
})
export class InsertarComponent implements OnInit {
    @Output() salida = new EventEmitter();
  insertar: HeroesModel = new HeroesModel();
  tabla: any = [];
  idinsertarActualizar: string;
  constructor(private insertarService: InsertarService) { }

  ngOnInit() {
    
  }

  registrar(forma: NgForm) {
    this.insertarService
      .registarinsertar(this.insertar)
      .then((insertar: any) => {
        Toast.fire(insertar.msg, '', 'success');
        forma.reset();
        this.salida.emit;
      })
      .catch((err: any) => {
        Toast.fire(err.console, '', 'error');
      });
  }
  actualizar(forma: NgForm) {
    this.insertarService
      .actualizarinsertar(this.idinsertarActualizar, this.insertar)
      .then((insertar: any) => {
        Toast.fire(insertar.msg, '', 'success');
        forma.reset();
        this.salida.emit;
      })
      .catch((err: any) => {
        Toast.fire(err.console.error.msg, '', 'error');
      });
  }

  dispararActualizar(idUsuario: string) {
    this.idinsertarActualizar = idUsuario;
    console.log(idUsuario);
  }
  elimiar(idinsertar: string) {
    this.idinsertarActualizar = idinsertar;
    console.log(idinsertar);
    this.insertarService
      .eliminarHeroe(idinsertar)
      .then((usuario: any) => {
        Toast.fire(usuario.msg, '', 'success');
        this.salida.emit;
      })
      .catch((err: any) => {
        Toast.fire(err.console.error.msg, '', 'error');
      });
  }

}
