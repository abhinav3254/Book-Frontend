import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookutilityService } from 'src/app/services/bookutility.service';


@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  book: any;
  bookId: any;

  constructor(private route: Router, private bookUtitlity: BookutilityService) { }

  ngOnInit() {
    this.bookId = window.localStorage.getItem('bookId-1');
    console.log(this.bookId + ' --- > is bookId');
    this.bookUtitlity.getBookById(this.bookId).subscribe((res) => {
      this.book = res
    });
  }
  error: any;
  updateBook(myFormValue: any) {
    console.log('uff');
    this.bookUtitlity.UpdateQuantity(myFormValue).subscribe((res) => {
      console.log('eroor2 --> ' + res);
    }, error => { // second parameter is to listen for error
      console.log('eroor --> ' + error);
      this.error = JSON.stringify(error.error.text);
      console.log(error.status);
      if (error.status == 200) {
        alert('updated');
      } else {
        alert("something went wrong");
      }
    });
    this.route.navigateByUrl('/inventory');
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

