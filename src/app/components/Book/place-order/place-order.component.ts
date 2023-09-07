import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  public orderItems: Orders[] = [];

  constructor(private cartService: CartService) { }


  ngOnInit(): void {
    this.cartService.getAllOrders().subscribe((res) => {
      console.log(res);
      this.orderItems = res as Orders[];
    });
  }

}

export interface Orders {
  id: number
  books: Book[]
  user: User
}

export interface Book {
  id: number
  publishers: Publishers
  author: Author
  imageUrl: string
  title: string
  genre: string
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
