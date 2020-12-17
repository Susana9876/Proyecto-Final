import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HerosComponent } from './components/heros/heros.component';
import { AboutComponent } from './components/about/about.component';

// Rutas
import { provideRoutes, RouterModule } from '@angular/router';
import { Error404Component } from './components/error404/error404.component';
import { HeroComponent } from './components/hero/hero.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { InsertarComponent } from './components/insertar/insertar.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PipesComponent } from './components/pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    HerosComponent,
    AboutComponent,
    Error404Component,
    HeroComponent,
    BuscadorComponent,
    InsertarComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'heros', component: HerosComponent},
    {path: 'insertar', component: InsertarComponent},
    {path: 'about', component: AboutComponent},
    {path: 'hero/:id', component: HeroComponent},
    {path: 'pipes', component: PipesComponent},
    {path: 'results/:termino', component:BuscadorComponent},
    {path: '**', pathMatch: 'full', component: Error404Component} 
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
