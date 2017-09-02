import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VokabelAbfrageComponent } from './vokabel-abfrage/vokabel-abfrage.component';
import {RouterModule, Routes} from "@angular/router";
import { DeutschComponent } from './vokabel-abfrage/deutsch/deutsch.component';
import { EnglishComponent } from './vokabel-abfrage/english/english.component';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

const appRoutes: Routes = [
  {path: '', component: VokabelAbfrageComponent},
  {path: 'deutsch', component: DeutschComponent},
  {path: 'english', component: EnglishComponent}
]

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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
