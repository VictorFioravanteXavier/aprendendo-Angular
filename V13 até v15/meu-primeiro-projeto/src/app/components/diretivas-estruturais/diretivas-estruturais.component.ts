import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {
  public condition: boolean = true
  public conditionClick: boolean = true
  public list: Array<{nome:string, idade: number}> = [
    {nome: "Dener Troquatte", idade: 29},
    {nome: 'Victor', idade: 17},
    {nome:'algo', idade: 59}
  ]

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      if (this.condition){
        this.condition = false
      } else {
        this.condition = true
      }
    }, 3000
    )
  }

  public onClick(){
    if (this.conditionClick){
      this.conditionClick = false
    } else {
      this.conditionClick = true
    }
  }

  public onClickAddList(){
    this.list.push({nome: "Nay", idade:21})
  }

  public onClickEventList(event: number){
    this.list.splice(event, 1)
  }

  public nome: string = 'dener'
}
