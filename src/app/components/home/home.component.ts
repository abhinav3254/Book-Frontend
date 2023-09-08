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
  constructor(private homeServices: HomeService, public nav: NavbarService, private bookUtitlity: BookutilityService) { }
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

  // Add Book To the Cart Items
  addToCart(bookId: any) {
    console.log('------>' + bookId);
    this.bookUtitlity.addToCartItem(bookId).subscribe((res) => {
      console.log(res);
    });
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

