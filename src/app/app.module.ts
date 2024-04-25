import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHttpModule } from './app-http/app-http.module';
import { DataExporterComponent } from './data-exporter/data-exporter.component';

@NgModule({
  declarations: [
    AppComponent,
    DataExporterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppHttpModule,
    HttpClientModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
