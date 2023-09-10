import { Component, OnInit } from '@angular/core';
import { BookutilityService } from 'src/app/services/bookutility.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {


  constructor(private bookUtilityService: BookutilityService
  ) { }

  orders: Root2[] = [];

  ngOnInit(): void {
    this.bookUtilityService.getAllOrders().subscribe((res) => {
      this.orders = res as Root2[];
    });
  }

}

// export type Root = Root2[]

export interface Root2 {
  id: number
  cart: Cart
  user: User
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


