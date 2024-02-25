import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    TemplateBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
