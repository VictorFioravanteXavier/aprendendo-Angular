import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',   
  template:`
    <!-- <router-outlet></router-outlet> -->
    <h1> Curso de Angular </h1>
    <h2> Componentes </h2>

    {{title}}
  `,
})
export class AppComponent {}
