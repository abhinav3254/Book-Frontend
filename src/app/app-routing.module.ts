import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { AddBooksComponent } from './components/Book/add-books/add-books.component';
import { AddPublisherComponent } from './components/Book/add-publisher/add-publisher.component';
import { AddAuthorComponent } from './components/Book/add-author/add-author.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
