import { Component, OnInit } from '@angular/core';
import { BookutilityService } from 'src/app/services/bookutility.service';
import { HomeService } from 'src/app/services/home.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: Book[] = [];
  constructor(private homeServices: HomeService, public nav: NavbarService) { }
  ngOnInit(): void {
    this.nav.show();
    // to get all the books api call
    this.homeServices.getAllBooks().subscribe((res) => {
      console.log(res);
      this.books = res;
    });

    // to get wether the user is admin or not
    this.homeServices.isAdmin().subscribe((res) => {
      // console.log(res);
    }, error => { // second parameter is to listen for error
      // console.log("role is :- " + error.error.text);

      if (error.error.text === '1#1$') {
        // window.alert('admin');
        window.localStorage.setItem('role', error.error.text);
      } else {
        // window.alert('user');
      }
    });
  }
  error: any;

  listOld: Array<number> = [];
  list: Array<number> = [];
  bookIdListLength: any = 0;
  data = {
    "list": [] as number[],
  };

  addToCart(bookId: any) {
    // Retrieve the old list from Local Storage
    const listOld = window.localStorage.getItem('list');
    const oldArray = listOld ? listOld.split(',').map(Number) : [];

    // Concatenate the old list with the new bookId and update this.list
    this.list = oldArray.concat(Number(bookId));

    // Store the updated list back in Local Storage
    window.localStorage.setItem('list', this.list.join(','));

    // Show alert so that the cart icon will get updated
    window.alert('Item Added to cart');

    // Optionally, update the bookIdListLength
    this.bookIdListLength = this.list.length;

    // Update data.list with the same data as this.list
    this.data.list = this.list;

    // Log this.data for debugging purposes
    // console.log(this.data.list);
  }

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  public viewDetails(id: any) {
    window.localStorage.setItem('detailsToShow', id);
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

  constructor(
    id: number,
    publishers: Publishers,
    author: Author,
    imageUrl: string,
    title: string,
    genre: string,
    price: string,
    description: string,
    category: string
  ) {
    this.id = id;
    this.publishers = publishers;
    this.author = author;
    this.imageUrl = imageUrl;
    this.title = title;
    this.genre = genre;
    this.price = price;
    this.description = description;
    this.category = category;
  }
}

