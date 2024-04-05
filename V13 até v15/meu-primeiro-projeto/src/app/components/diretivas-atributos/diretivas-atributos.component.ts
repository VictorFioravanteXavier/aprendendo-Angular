import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {
  public valor: boolean = false
  public altura: string = "20px"
  public backgroundColor: string = 'red'
  public nome: string = ''
  public list: Array<{nome:string}> = []

  public date:Date = new Date()

  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
      if (this.valor){
        this.valor = false
      } else {
        this.valor = true
      }

      if (this.altura === '20px'){
        this.altura = '50px'
        this.backgroundColor = 'blue'
      } else {
        this.altura = '20px'
        this.backgroundColor = 'red'
      }
    }, 2000)

  }

  public salvar(){
    this.list.push({nome: this.nome})
    this.nome = ''
  }

}
