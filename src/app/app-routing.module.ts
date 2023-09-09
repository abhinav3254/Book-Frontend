import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { AddBooksComponent } from './components/Book/add-books/add-books.component';
import { AddPublisherComponent } from './components/Book/add-publisher/add-publisher.component';
import { AddAuthorComponent } from './components/Book/add-author/add-author.component';
import { CartComponent } from './components/cart/cart.component';
import { PlaceOrderComponent } from './components/Book/place-order/place-order.component';
import { DetailsComponent } from './components/Book/details/details.component';
import { SearchComponent } from './components/search/search.component';
import { AddCategoryComponent } from './components/Book/add-category/add-category.component';
import { CategoryComponent } from './components/category/category.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PaymentComponent } from './components/payment/payment.component';
import { MakeOrderComponent } from './components/Book/make-order/make-order.component';

const routes: Routes = [
  {
    path: '',
    component: LogInComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'addBooks',
    component: AddBooksComponent
  },
  {
    path: 'addPublisher',
    component: AddPublisherComponent
  },
  {
    path: 'addAuthor',
    component: AddAuthorComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'order',
    component: PlaceOrderComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'order',
    component: PlaceOrderComponent
  },
  {
    path: 'addCategory',
    component: AddCategoryComponent
  },
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  {
    path: 'make-order',
    component: MakeOrderComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
