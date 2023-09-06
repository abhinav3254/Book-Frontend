import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { AddBooksComponent } from './components/Book/add-books/add-books.component';
import { GetAllBooksComponent } from './components/Book/get-all-books/get-all-books.component';
import { HttpClientModule } from '@angular/common/http';
import { AddPublisherComponent } from './components/Book/add-publisher/add-publisher.component'
import { AddAuthorComponent } from './components/Book/add-author/add-author.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { AddToCartComponent } from './components/Book/add-to-cart/add-to-cart.component';
import { PlaceOrderComponent } from './components/Book/place-order/place-order.component';
import { CartComponent } from './components/cart/cart.component';
import { MatBadgeModule } from '@angular/material/badge';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DetailsComponent } from './components/Book/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogInComponent,
    SignUpComponent,
    AddBooksComponent,
    GetAllBooksComponent,
    AddPublisherComponent,
    AddAuthorComponent,
    AddToCartComponent,
    PlaceOrderComponent,
    CartComponent,
    NavBarComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule, MatInputModule, MatNativeDateModule, MatDatepickerModule,
    MatSelectModule,
    MatBadgeModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
