import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio', // Cambia 'app-home' a 'app-inicio'
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.page.scss'],
})
export class InicioPage { // Cambia 'HomePage' a 'InicioPage'
  base: number = 0;
  altura: number = 0;
  area: number = 0;
  escala: number = 5;

  constructor() {}

  calcularArea() {
    this.area = this.base * this.altura;
  }
}
