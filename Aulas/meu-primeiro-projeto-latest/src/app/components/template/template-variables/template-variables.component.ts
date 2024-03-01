import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NewComponent } from '../../new-component/new-component.component';


@Component({
  selector: 'app-template-variables',
  templateUrl: './template-variables.component.html',
  styleUrls: ['./template-variables.component.scss']
})
export class TemplateVariablesComponent implements AfterViewInit {
  @ViewChild('name') public nameInput !: ElementRef;
  @ViewChild('h2') public nameH2 !: ElementRef;
  @ViewChild(NewComponent) public childComponent !: NewComponent;

 
  ngAfterViewInit(){
    console.log(this.nameInput.nativeElement.value)
    console.log(this.nameH2.nativeElement.innerText)
    console.log(this.childComponent.name)
  }
}
