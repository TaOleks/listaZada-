import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Klikacz1Component } from './klikacz1/klikacz1.component';
import { Klikacz2Component } from './klikacz2/klikacz2.component';
import { ClickService } from './services/click.service';
import { LogService } from './services/log.service';

@NgModule({
  declarations: [
    AppComponent,
    Klikacz1Component,
    Klikacz2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ClickService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
