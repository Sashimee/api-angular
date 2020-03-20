import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerBoardComponent } from './components/beer-board/beer-board.component';
import { HttpClientModule, HttpClient } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    BeerBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
