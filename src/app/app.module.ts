import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule, MatSnackBarModule  } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './LandingPage/header/header.component';
import { FooterComponent } from './LandingPage/footer/footer.component';
import { IntroComponent } from './LandingPage/intro/intro.component';
import { NieuwsbriefComponent } from './LandingPage/nieuwsbrief/nieuwsbrief.component';
import { CommissieComponent } from './LandingPage/commissie/commissie.component';
import { ContactComponent } from './contact/contact.component';
import { LandingContainerComponent } from './LandingPage/landing-container/landing-container.component';
import { FaqComponent } from './faq/faq.component';
import { ArchiefComponent } from './archief/archief.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    NieuwsbriefComponent,
    CommissieComponent,
    ContactComponent,
    LandingContainerComponent,
    FaqComponent,
    ArchiefComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatExpansionModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
