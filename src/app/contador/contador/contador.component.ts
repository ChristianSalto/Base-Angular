import { Component } from "@angular/core";


@Component({
  selector: 'app-contador',
  template: `

    <h1>{{ title }}</h1>
    <hr>
    <h3>La base es : <strong> {{ base }} </strong></h3>

    <button (click) = "handleClick(-base)"> - {{ base }} </button>
    <span> {{ numero }} </span>
    <button (click) = "handleClick(+base)"> + {{ base }} </button>
  `
})


export class ContadorComponent{
  title: string = 'Contador App';
  numero: number = 10;
  base: number = 5;

  handleClick( valor: number){
     this.numero += valor
  }
}
