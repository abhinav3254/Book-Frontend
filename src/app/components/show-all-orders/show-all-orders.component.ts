import { Component, OnInit } from '@angular/core';
import { BookutilityService } from 'src/app/services/bookutility.service';

@Component({
  selector: 'app-show-all-orders',
  templateUrl: './show-all-orders.component.html',
  styleUrls: ['./show-all-orders.component.css']
})
export class ShowAllOrdersComponent implements OnInit {
  ordersList: Orders[] = [];
  constructor(private bookUtility: BookutilityService) { }
  ngOnInit(): void {
    this.bookUtility.getAllTheOrders().subscribe((res) => {
      console.log(res);
      this.ordersList = res as Orders[];
    });
  }

}


export interface Orders {
  id: number
  cart: Cart
  user: User2
  payment: Payment
  address: string
  orderDate: string
}

export interface Cart {
  id: number
  cartItems: CartItem[]
  user: any
}

export interface CartItem {
  id: number
  user: any
  book: Book
  bookPrice: number
  quantity: number
  cgst: number
  sgst: number
  discount: number
  finalPrice: number
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
  nationality: any
  gender: any
}

export interface ListRating {
  id: number
  rating: number
  user: User
  ratingPostDate?: string
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

export interface User2 {
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

export interface Payment {
  pid: number
  user: any
  cardNumber: string
  bankName: string
  nameOnCard: string
  cvv: string
  expiryDate: string
  amount: number
}

