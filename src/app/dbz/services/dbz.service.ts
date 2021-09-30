import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  private _personajesDBZ: Personaje[] = [
    {
      nombre: 'Vegeta',
      poder: 19900,
    },
    {
      nombre: 'Goku',
      poder: 20000,
    },
    {
      nombre: 'Krillin',
      poder: 700,
    },
    {
      nombre: 'Trucks',
      poder: 14700,
    },
  ];

  get personajesDBZ(): Personaje[] {
    return [...this._personajesDBZ]; // rompemos la referencia con los personajes de la clase
  } // y con ello conseguimos que no se puedan manipular, dandole asi mas seguridad.

  constructor() {}

  handleAddPersonaje(personaje: Personaje) {
    this._personajesDBZ.push(personaje);
  }
}
