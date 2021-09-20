import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
})
export class HeroeComponent {
  nombre: string = 'Ironman'
  edad: number = 45;
  vengadores: string[] = ['Ironman','Thor', 'Hulk', 'Spiderman'];

  get nombreCapitalizado() {
    return this.nombre.toLocaleUpperCase();
  }

  getNombre(): string {
    return `${this.nombre} -> ${this.edad}`;
  }

  setHeroe(): void{
    this.nombre = this.vengadores[Math.floor(Math.random() * 3)]
  }

  setEdad(): void{
    this.edad = Math.floor(Math.random() * 90)
  }
}
