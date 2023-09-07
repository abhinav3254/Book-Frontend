import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  ngAfterViewChecked() {
    console.log('Change detection cycle');
  }

  items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);

  public cartItems: Book[] = [];

  constructor(private cartService: CartService) { }
  ngOnInit(): void {
    const stringArray = (window.localStorage.getItem('list'))?.split(',');
    const numberArray2 = stringArray?.map(str => parseInt(str, 10));
    console.log(numberArray2);

    this.cartService.showAllCartItems(numberArray2).subscribe((res: any) => { console.log(res); const thiscartItems = res as Book[]; this.cartItems = thiscartItems });

  }

  calculatePrice() {
    let i: number = 0;
    let totalPrice: number = 0;

    while (i < this.cartItems.length) {
      // Convert the price to a number using parseFloat or parseInt
      const itemPrice = parseFloat(this.cartItems[i].price);

      // Check if itemPrice is a valid number before adding it
      if (!isNaN(itemPrice)) {
        totalPrice += itemPrice;
      }

      i++;
    }

    // Now, totalPrice contains the sum of all valid item prices
    console.log('Total Price:', totalPrice);
  }

  deleteAllItemsFromCart() {
    window.localStorage.removeItem('list');
    console.log('Ok')
    window.alert('Deleted All the Items From LocalStorage');
    window.location.reload();
  }

  // For making order
  orderIt() {
    const stringArray = (window.localStorage.getItem('list'))?.split(',');
    const numberArray2 = stringArray?.map(str => parseInt(str, 10));
    console.log(numberArray2);

    this.cartService.saveToCart(numberArray2).subscribe((res: any) => { console.log(res); const thiscartItems = res as Book[]; this.cartItems = thiscartItems });
    window.alert('Order Placed');
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

