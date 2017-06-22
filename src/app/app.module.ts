import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

// Describes the class, (Decorator)
@NgModule({
  imports:      [ BrowserModule ], // what stuff do i need
  declarations: [ AppComponent ], // what things are in my app
  bootstrap:    [ AppComponent ] // where to start
})
export class  AppModule { }
