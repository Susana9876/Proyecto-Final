import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private _Router: Router ) { }

  ngOnInit(): void {
  }

  Search(searchValue){
    console.log(searchValue);
    this._Router.navigate(['/results', searchValue]);
  }

}
