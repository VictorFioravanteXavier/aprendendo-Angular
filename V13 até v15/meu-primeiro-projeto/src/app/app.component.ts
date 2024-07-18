import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

    <!--<app-diretivas-estruturais></app-diretivas-estruturais>-->
    <!--<app-diretivas-atributos>
      <h1>Aulas de diretivas</h1>
      <hr>
      </app-diretivas-atributos>
      <app-diretivas-atributos></app-diretivas-atributos>
      <app-new-component></app-new-component>
    
    <app-input [contador]="addValue"></app-input>
    <br>
    <button (click)="add()">Adicionar valor</button>
    
    <ng-template [ngIf]="getDados">
      <h1>{{getDados.nome}}</h1>
      <h2>{{getDados.idade}}</h2>
    </ng-template>
    <app-output (enviarDados)="setDados($event)"></app-output>-->

    <app-food-add></app-food-add>
    <app-food-list></app-food-list>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit{
  constructor() {}
  public addValue: number = 0;
  public add() {
    this.addValue++ 
  }
  ngOnInit(): void {}

  public getDados : {nome: string, idade: number} | undefined;

  public setDados(event: {nome: string, idade: number}) {
    this.getDados = event;
  }
}
