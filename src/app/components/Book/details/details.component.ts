import { Component, OnInit } from '@angular/core';
import { BookutilityService } from 'src/app/services/bookutility.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  books: any;
  constructor(private bookUtility: BookutilityService) {
  }
  ngOnInit(): void {
    const id = window.localStorage.getItem('detailsToShow')
    console.log(window.localStorage.getItem('detailsToShow'));
    this.bookUtility.getBookById(id).subscribe((res) => {
      console.log(res);
      this.books = res;
    });
  }

}


class Book {
  id: number;
  publishers: Publishers;
  author: Author;
  imageUrl: string;
  isbn: string;
  pageCount: string;
  bookStatus: boolean;
  publishDate: string;
  title: string;
  price: string;
  description: string;
  category: string;
  averageRating: number;
  listRatings: ListRating[];

  constructor(
    id: number,
    publishers: Publishers,
    author: Author,
    imageUrl: string,
    isbn: string,
    pageCount: string,
    bookStatus: boolean,
    publishDate: string,
    title: string,
    price: string,
    description: string,
    category: string,
    averageRating: number,
    listRatings: ListRating[]
  ) {
    this.id = id;
    this.publishers = publishers;
    this.author = author;
    this.imageUrl = imageUrl;
    this.isbn = isbn;
    this.pageCount = pageCount;
    this.bookStatus = bookStatus;
    this.publishDate = publishDate;
    this.title = title;
    this.price = price;
    this.description = description;
    this.category = category;
    this.averageRating = averageRating;
    this.listRatings = listRatings;
  }
}


class Publishers {
  id: number;
  publisherName: string;
  country: string;

  constructor(id: number, publisherName: string, country: string) {
    this.id = id;
    this.publisherName = publisherName;
    this.country = country;
  }

}

class Author {
  id: number;
  authorName: string;
  dateOfBirth: string;
  constructor(id: number, authorName: string, dateOfBirth: string) {
    this.id = id;
    this.authorName = authorName;
    this.dateOfBirth = dateOfBirth;
  }
}

class ListRating {
  id: number;
  rating: number;
  user: User;
  comment: string
  constructor(id: number, rating: number, user: User, comment: string) {
    this.id = id;
    this.rating = rating;
    this.user = user;
    this.comment = comment
  }
}

class User {
  id: number;
  username: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  status: string;
  role: string;
  dateOfBirth: string;
  gender: string;
  registerDate: string;
  lastLogin: string;

  constructor(
    id: number,
    username: string,
    name: string,
    email: string,
    password: string,
    phone: string,
    address: string,
    status: string,
    role: string,
    dateOfBirth: string,
    gender: string,
    registerDate: string,
    lastLogin: string
  ) {
    this.id = id;
    this.username = username;
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.address = address;
    this.status = status;
    this.role = role;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
    this.registerDate = registerDate;
    this.lastLogin = lastLogin;
  }

}





// class Book {
//   id: number
//   publishers: Publishers
//   author: Author
//   imageUrl: string
//   isbn: string
//   pageCount: string
//   bookStatus: boolean
//   publishDate: string
//   title: string
//   price: string
//   description: string
//   category: string
//   averageRating: number
//   listRatings: ListRating[]

//   constructor() {
//     this.id = 0;
//     this.publishers = { id: 0, publisherName: '', country: '' };
//     this.author = { id: 0, authorName: '', dateOfBirth: '' };
//     this.imageUrl = '';
//     this.title = '';
//     this.price = '';
//     this.description = '';
//     this.category = '';
//   }
// }

// interface Publishers {
//   id: number
//   publisherName: string
//   country: string
// }

// interface Author {
//   id: number
//   authorName: string
//   dateOfBirth: string
// }

// interface ListRating {
//   id: number
//   rating: number
//   user: User
// }

// interface User {
//   id: number
//   username: string
//   name: string
//   email: string
//   password: string
//   phone: string
//   address: string
//   status: string
//   role: string
//   dateOfBirth: string
//   gender: string
//   registerDate: string
//   lastLogin: string
// }



