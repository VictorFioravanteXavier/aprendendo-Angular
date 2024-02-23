import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';

@Component({
  selector: 'app-root',   
  styles: [`
    h1{
      color: red
    }
  `],
  template:`
    <!-- <router-outlet></router-outlet> -->
    <h1> Curso de Angular </h1>
    
    <app-new-component></app-new-component>
  `,
})
export class AppComponent {}
