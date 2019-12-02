import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { PrimeNgModule } from '@app/primeng.module';
import { HelloComponent } from '@app/hello/hello.component';
import { FormsModule } from '@angular/forms';
import { ComputeModule } from '@compute/compute.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'prismjs/components/prism-json.js';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    AppRoutingModule,
    ComputeModule,
    BrowserModule,
    PrimeNgModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  exports: [
    BrowserModule,
    PrimeNgModule,
    HttpClientModule,
    FormsModule,
    ComputeModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
