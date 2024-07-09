
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QrGeneratorComponent } from './qr-generator/qr-generator.component';
import { QrService } from './services/qr.service'; 

@NgModule({
  declarations: [
    AppComponent,
    QrGeneratorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    QrService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
