import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { CustomerListComponent }  from './customer-list.component';
import { CustomerDetailComponent }  from './customer-detail.component';

// Describes the class, (Decorator)
@NgModule({
  imports:      [ BrowserModule, FormsModule ], // what stuff do i need
  declarations: [ 
    AppComponent,
    CustomerListComponent,
    CustomerDetailComponent
     ], // what things are in my app
  bootstrap:    [ AppComponent ] // where to start
})
export class  AppModule { }
