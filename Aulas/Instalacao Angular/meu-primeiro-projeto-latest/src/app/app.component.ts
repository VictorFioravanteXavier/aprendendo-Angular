import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Components
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';

@Component({
  selector: 'app-root',   
  template:`
    <!-- <router-outlet></router-outlet> -->
    <!-- <app-new-component></app-new-component> -->
    <!--<app-template-binding></app-template-binding>-->
    <h1> Curso de Angular </h1>
    <app-template-variables> </app-template-variables>
  `,
})
export class AppComponent {}
