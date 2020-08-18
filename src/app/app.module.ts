import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PicturesModule } from './modules/pictures/pictures.module'
import { AppRoutingModule } from './app.routing.module';
import { ErrorsModule } from './modules/errors/errors.module';
import { HomeModule } from './modules/home/home.module';



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
