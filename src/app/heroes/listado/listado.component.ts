import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  vengadores: string[] = ['Ironman','Thor', 'Hulk', 'Spiderman', 'Capitan America'];
  heroe: string = '';


  borrarVengador(): void{
    this.heroe = this.vengadores.shift() || '';
  }

  allVengadores(){
    this.vengadores = ['Ironman','Thor', 'Hulk', 'Spiderman', 'Capitan America']
  }
}
