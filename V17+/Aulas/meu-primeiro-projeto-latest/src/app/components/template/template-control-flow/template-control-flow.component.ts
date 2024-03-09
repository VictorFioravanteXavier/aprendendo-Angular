import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';



@Component({
  selector: 'app-template-control-flow',
  templateUrl: './template-control-flow.component.html',
  styleUrls: ['./template-control-flow.component.scss']
})
export class TemplateControlFlowComponent{

    public isTrue = true

    /* public loadingData$: Observable<string[]> = of([
      "item 1",
      "item 2",
      "item 3",
    ]).pipe(delay(3000)); */

    public trackByFn(index:number) {
      return index
    }

    public itens = [{name: 'Dener Troquatte'}]
    
    public switchCondition = 'A';
}


