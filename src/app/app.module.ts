import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './LandingPage/header/header.component';
import { FooterComponent } from './LandingPage/footer/footer.component';
import { IntroComponent } from './LandingPage/intro/intro.component';
import { NieuwsbriefComponent } from './LandingPage/nieuwsbrief/nieuwsbrief.component';
import { CommissieComponent } from './LandingPage/commissie/commissie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    NieuwsbriefComponent,
    CommissieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
