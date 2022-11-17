import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CloudinaryModule} from '@cloudinary/ng'; //Importação do modulo
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CloudinaryModule // Modulo Cloudnary
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
