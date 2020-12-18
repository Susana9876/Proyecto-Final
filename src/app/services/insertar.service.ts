import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroesModel } from '../models/heroes';

@Injectable({
  providedIn: 'root'
}) 
export class InsertarService {
  url = `http://localhost:3000`;

  constructor(private http: HttpClient) { }

  obtenerinsertar(){
    return this.http.get(`${this.url}/heroes`).toPromise();
  }
  getHero(id: string){
    return this.http.get(`${this.url}/heroe/${id}`).toPromise();
  }

  registarinsertar( heroe: HeroesModel) {
    return this.http.post(`${this.url}/heroe`, heroe).toPromise();
  }

 actualizarinsertar(id: string, heroe: HeroesModel) {
  return this.http.put(`${this.url}/heroe/${id}`, heroe).toPromise();
 }

 eliminarHeroe(id: string) {
  return this.http.delete(`${this.url}/heroe/${id}`).toPromise();
 }
 
}
