import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { PicturesModule, ErrorsModule, HomeModule } from './modules/index';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PicturesModule,
    ErrorsModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
