import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { AddBooksComponent } from './book/add-books/add-books.component';
import { AddAuthorComponent } from './components/add-author/add-author.component';
import { GetAllBooksComponent } from './book/get-all-books/get-all-books.component';
import { HttpClientModule } from '@angular/common/http';
import { AddPublisherComponent } from './book/add-publisher/add-publisher.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogInComponent,
    SignUpComponent,
    AddBooksComponent,
    AddAuthorComponent,
    GetAllBooksComponent,
    AddPublisherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
