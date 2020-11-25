import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PyronlaboratoryCoreComponent } from 'pyronlaboratory-core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	PyronlaboratoryCoreComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
