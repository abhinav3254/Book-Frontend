import { Component, OnInit } from '@angular/core';
import { BookutilityService } from 'src/app/services/bookutility.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  bookDetails: Book = new Book;
  constructor(private bookUtility: BookutilityService) {
  }
  ngOnInit(): void {
    const id = window.localStorage.getItem('detailsToShow')
    console.log(window.localStorage.getItem('detailsToShow'));
    this.bookUtility.getBookById(id).subscribe((res) => {
      // console.log(res);
      this.bookDetails = res;
    });
  }

}


// interface Publishers {
//   id: number;
//   publisherName: string;
//   country: string;
// }

// interface Author {
//   id: number;
//   authorName: string;
//   dateOfBirth: string;
// }

// class Book {
//   id: number;
//   publishers: Publishers;
//   author: Author;
//   imageUrl: string;
//   title: string;
//   genre: string;
//   price: string;
//   description: string;
//   category: string;


//   constructor(
//     id: number,
//     publishers: Publishers,
//     author: Author,
//     imageUrl: string,
//     title: string,
//     genre: string,
//     price: string,
//     description: string,
//     category: string
//   ) {
//     this.id = id;
//     this.publishers = publishers;
//     this.author = author;
//     this.imageUrl = imageUrl;
//     this.title = title;
//     this.genre = genre;
//     this.price = price;
//     this.description = description;
//     this.category = category;
//   }
// }

class Book {
  id: number;
  publishers: Publishers;
  author: Author;
  imageUrl: string;
  title: string;
  genre: string;
  price: string;
  description: string;
  category: string;

  // Empty constructor
  constructor() {
    this.id = 0;
    this.publishers = { id: 0, publisherName: '', country: '' };
    this.author = { id: 0, authorName: '', dateOfBirth: '' };
    this.imageUrl = '';
    this.title = '';
    this.genre = '';
    this.price = '';
    this.description = '';
    this.category = '';
  }
}

interface Publishers {
  id: number;
  publisherName: string;
  country: string;
}

interface Author {
  id: number;
  authorName: string;
  dateOfBirth: string;
}




