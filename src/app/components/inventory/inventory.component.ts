import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor(private homeService: HomeService, private router: Router) { }

  books: book[] = [];

  ngOnInit(): void {
    this.homeService.getAllBooks().subscribe(
      (res) => {
        console.log(res);
        this.books = res;
      }
    );
  }

  updateBook(bookId: number) {
    console.log(bookId);
    window.localStorage.setItem('bookId-1', JSON.stringify(bookId));
    // this.router.navigate(['/update-book', bookId]);
    this.router.navigateByUrl('/update-book');
  }

}

export interface book {
  id: number
  publishers: Publishers
  author: Author
  imageUrl: string
  isbn: string
  pageCount: string
  bookStatus: boolean
  publishDate: string
  title: string
  price: string
  description: string
  category: string
  averageRating: number
  listRatings: ListRating[]
  bookQuantity: any
}

export interface Publishers {
  id: number
  publisherName: string
  country: string
}

export interface Author {
  id: number
  authorName: string
  dateOfBirth: string
  nationality: any
  gender: any
}

export interface ListRating {
  id: number
  rating: number
  user: User
  ratingPostDate?: string
  comment?: string
}

export interface User {
  id: number
  username: string
  name: string
  email: string
  password: string
  phone: string
  address: string
  status: string
  role: string
  dateOfBirth: string
  gender: string
  registerDate: string
  lastLogin: string
}

