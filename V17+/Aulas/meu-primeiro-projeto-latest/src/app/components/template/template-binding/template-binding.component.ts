import {  CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  templateUrl: './template-binding.component.html',
  styleUrls: ['./template-binding.component.scss']
})
export class TemplateBindingComponent {
  // Text interpolation
  public name = 'Dener Troquatte';
  public age = 32;
  public condition =  this.age < 1 ? 'teste' : 'teste2';
  public sum (val1:number, val2:number) {
    return val1 + val2
  }

  // Binding
  // Property Binding
  public isDisabled = true;
  public srcValue = 'https://s2-techtudo.glbimg.com/C3GPvh6ECD-33n8Df_v1EecSL9o=/0x0:1600x1000/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/m/H/k84eHgTA2l7JhjO3Q6Aw/wallpaper-2560-x-1600-wallpaper.jpg';
  public nameImg = 'Logo D&D';

  // Class and Style binding
  public isCorrect = this.name === "Dener Troquatte" ? true : false;
  public isTextDecoration = this.age >= 32 ? 'underline' : 'none';

  // Event binding 
  public incrementarIdade(){
    return this.age++;
  }

  public subtrairIdade(){
    return this.age--;
  }
  
  public onKeyDown(event: Event){
    console.log(event)
  }

  public onMouseMove(event: MouseEvent){
    console.log({
      clientX: event.clientX,
      clientY: event.clientY
    })
  }
}
