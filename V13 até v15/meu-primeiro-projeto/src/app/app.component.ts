import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

    <!--<app-diretivas-estruturais></app-diretivas-estruturais>-->
    <!--<app-diretivas-atributos>
      <h1>Aulas de diretivas</h1>
      <hr>
    </app-diretivas-atributos>-->
    <app-diretivas-atributos></app-diretivas-atributos>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit{
  constructor() {}

  ngOnInit(): void {

  }
}
