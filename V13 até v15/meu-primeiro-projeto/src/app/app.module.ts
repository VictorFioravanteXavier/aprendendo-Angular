import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { DataBidingComponent } from './components/data-biding/data-biding.component';
import { FormsModule } from '@angular/forms';
import { DiretivasEstruturaisComponent } from './components/diretivas-estruturais/diretivas-estruturais.component';
import { DiretivasAtributosComponent } from './components/diretivas-atributos/diretivas-atributos.component';
import { NewComponentComponent } from './shared/new-component/new-component.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    DataBidingComponent,
    DiretivasEstruturaisComponent,
    DiretivasAtributosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
