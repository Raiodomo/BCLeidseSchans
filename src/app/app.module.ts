import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './LandingPage/header/header.component';
import { FooterComponent } from './LandingPage/footer/footer.component';
import { IntroComponent } from './LandingPage/intro/intro.component';
import { NieuwsbriefComponent } from './LandingPage/nieuwsbrief/nieuwsbrief.component';
import { CommissieComponent } from './LandingPage/commissie/commissie.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from 'selenium-webdriver/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    NieuwsbriefComponent,
    CommissieComponent,
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    MatExpansionModule,
    MatListModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
