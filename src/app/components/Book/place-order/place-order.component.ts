import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookutilityService } from 'src/app/services/bookutility.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {
  constructor(private bookUtilityService: BookutilityService
  ) { }

  orders: Order[] = [];

  ngOnInit(): void {
    this.bookUtilityService.getAllOrders().subscribe((res) => {
      this.orders = res as Order[];
      console.log(res);
    });
  }



  postRating(myFormValue: any, bookId: any) {
    console.log('Form Value:', myFormValue); // Add this line for debugging

    const values = {
      rating: '',
      bookId: '',
      comment: ''
    }

    values.bookId = JSON.stringify(bookId);
    values.rating = JSON.stringify(parseInt(JSON.stringify(myFormValue.value.rating).replace(/"/g, ''), 10));
    values.comment = myFormValue.value.comment;

    console.log('Values:', values); // Add this line for debugging

    this.bookUtilityService.postRating(values).subscribe((res) => {
      // Handle the response as needed
    }, error => {
      console.log('Error:', error);
      console.log('Error Status:', error.status);

      if (error.status === 200) {
        alert('Thanks For your Feedback');
      } else if (error.status === 400) {
        alert('You Already Rated');
      } else {
        alert('SOMETHING WENT WRONG');
      }
    });
  }

}


export interface Order {
  id: number;
  cart: Cart;
  user: User;
  payment: Payment;
  address: string;
  orderDate: Date;
}

export interface Cart {
  id: number;
  cartItems: CartItem[];
  user: null;
}

export interface CartItem {
  id: number;
  user: null;
  book: Book;
  bookPrice: number;
  quantity: number;
  cgst: number;
  sgst: number;
  discount: number;
  finalPrice: number;
}

export interface Book {
  id: number;
  publishers: Publishers;
  author: Author;
  imageUrl: string;
  isbn: string;
  pageCount: string;
  bookStatus: boolean;
  publishDate: Date;
  title: string;
  price: string;
  description: string;
  category: string;
  averageRating: number;
  listRatings: ListRating[];
  bookQuantity: number;
}

export interface Author {
  id: number;
  authorName: string;
  dateOfBirth: Date;
  nationality: null;
  gender: null;
}

export interface ListRating {
  id: number;
  rating: number;
  user: User;
  ratingPostDate: Date | null;
  comment: null | string;
}

export interface User {
  id: number;
  username: Username;
  name: Email;
  email: Email;
  password: string;
  phone: string;
  address: Address;
  status: string;
  role: Role;
  dateOfBirth: Date;
  gender: Gender;
  registerDate: Date;
  lastLogin: Date;
}

export enum Address {
  Sector2ShantiNiketan = "sector 2 shanti niketan",
}

export enum Email {
  Abhinav3254GmailCOM = "abhinav3254@gmail.com",
}

export enum Gender {
  Male = "male",
}

export enum Role {
  Admin = "admin",
  User = "user",
}

export enum Username {
  Rahul1 = "rahul1",
  Root = "root",
}

export interface Publishers {
  id: number;
  publisherName: string;
  country: string;
}

export interface Payment {
  pid: number;
  user: null;
  cardNumber: string;
  bankName: string;
  nameOnCard: string;
  cvv: string;
  expiryDate: Date;
  amount: number;
}
