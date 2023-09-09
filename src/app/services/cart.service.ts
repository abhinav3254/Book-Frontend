import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  // Get All The Items From the cart
  public showAllCartItems() {
    const url = 'http://localhost:9091/cartItem/getAll';
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    return this.http.get(url, { headers: header });
  }

  public saveToCart(listOfBook: any) {
    const url = 'http://localhost:9091/orders/order';
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    return this.http.post(url, listOfBook, { headers: header });
  }

  // increment value in the cart

  increasesValueInTheCart(cartItemId: string) {
    const url = 'http://localhost:9091/cartItem/incrementItem?cartItemId=' + cartItemId;
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    return this.http.post(url, cartItemId, { headers: header });
  }

  // decrement value in the cart

  decreaseValueInTheCart(cartItemId: string) {
    const url = 'http://localhost:9091/cartItem/decrementItem?cartItemId=' + cartItemId;
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    return this.http.post(url, cartItemId, { headers: header });
  }

  // Delete item from cart

  deleteItemFromCartItem(cartItemId: string) {
    const url = 'http://localhost:9091/cartItem/deleteItem?cartItemId=' + cartItemId;
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    return this.http.post(url, cartItemId, { headers: header });
  }

  // Find the total price

  getSumOfAllFinalPrice() {
    const url = 'http://localhost:9091/cartItem/totalPriceSum';
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    return this.http.get(url, { headers: header });
  }

}
