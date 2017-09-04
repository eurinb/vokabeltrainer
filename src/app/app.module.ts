import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VokabelAbfrageComponent } from './vokabel-abfrage/vokabel-abfrage.component';
import { DeutschComponent } from './vokabel-abfrage/deutsch/deutsch.component';
import { EnglishComponent } from './vokabel-abfrage/english/english.component';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    VokabelAbfrageComponent,
    DeutschComponent,
    EnglishComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
