import { Component, OnInit } from '@angular/core';
import { BookutilityService } from 'src/app/services/bookutility.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private bookUtilityService: BookutilityService) { }

  books: Book[] = [];

  autocompleteSuggestions: any;

  ngOnInit(): void {
    this.bookUtilityService.getSuggestion().subscribe((res) => {
      console.log('suggestion is :- ' + res);
      this.autocompleteSuggestions = res;
    });
  }

  searchQuery: string = ''
  getSearchQuery() {
    this.bookUtilityService.searchQuery(this.searchQuery).subscribe((res) => {
      this.books = res;
    });
  }

  addToCart(bookId: any) {
    console.log('------>' + bookId);
    this.bookUtilityService.addToCartItem(bookId).subscribe((res) => {
      console.log(res);
    });
  }

  public viewDetails(id: any) {
    window.localStorage.setItem('detailsToShow', id);
  }

}


export interface Book {
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
}

export interface ListRating {
  id: number
  rating: number
  user: User
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