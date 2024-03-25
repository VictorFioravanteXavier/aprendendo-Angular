import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {

  public nome: string = 'Dener'
  public idade: number = 29
  public maisUm: number = 1

  public checkefDisabled: boolean = true
  public imgSrc: string = 'https://i.pinimg.com/736x/ce/70/cb/ce70cbf4ab969b4afc988ba0650330d2.jpg'
  public imgTitle:string = 'property binding'

  public alertaInfo(valor: MouseEvent){
    console.log(valor)
  }

  public position: {x: number, y: number} = {x: 0, y: 0}
  public mouseMoveTeste(valor:MouseEvent) {
    console.log(valor)
    this.position.x = valor.offsetX
    this.position.y = valor.offsetY
  }
  constructor() { }

  ngOnInit(): void {
  }

}
