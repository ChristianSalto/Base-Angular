import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent {
  @Input() nuevoPersonaje: Personaje = {
    nombre: '',
    poder: 0,
  };

  constructor(private dbzService: DbzService) {}

  // @Output() onNewPersonaje: EventEmitter<Personaje> = new EventEmitter(); // @Output() -> decorador que nos sirver para emitir eventos

  handleSubmit() {
    if (this.nuevoPersonaje.nombre.trim().length === 0) {
      return;
    }

    //  this.onNewPersonaje.emit( this.nuevoPersonaje )
    this.dbzService.handleAddPersonaje(this.nuevoPersonaje);

    this.nuevoPersonaje = {
      nombre: '',
      poder: 0,
    };
  }
}
