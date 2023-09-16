import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookutilityService {

  dataFromSearchBar: any;

  constructor(private http: HttpClient) { }

  public getUpcomingBooks(): Observable<any> {
    const url = 'http://localhost:9091/book/upcomingBooks';
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    return this.http.get(url, { headers: header });
  }

  public UpdateQuantity(value: any) {
    const url = 'http://localhost:9091/book/updateQuantity';
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    return this.http.post(url, value, { headers: header });
  }

  public getBookById(id: any): Observable<any> {
    const url = 'http://localhost:9091/book/' + id;
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    return this.http.get(url, { headers: header });
  }

  public searchQuery(value: any): Observable<any> {
    const url = 'http://localhost:9091/book/search/' + value;
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    return this.http.get(url, { headers: header });
  }

  public getAllCategory(): Observable<any> {
    const url = 'http://localhost:9091/categories/all';
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    return this.http.get(url, { headers: header });
  }

  public addCategory(formValue: any): Observable<any> {
    const url = 'http://localhost:9091/categories/add';
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    return this.http.post(url, formValue, { headers: header });
  }

  public getSuggestion(): Observable<any> {
    const url = 'http://localhost:9091/book/suggest';
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    return this.http.get(url, { headers: header });
  }

  // searching book By category

  public searchBookByCategory(value: any) {
    const url = 'http://localhost:9091/book/category/' + value;
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    return this.http.get(url, { headers: header });
  }

  sharedData: any;
  public setSharedDataValue(value: any) {
    this.sharedData = value;
  }


  // Add Book to the cartItems

  public addToCartItem(bookId: any) {
    const url = 'http://localhost:9091/cartItem/add?bookId=' + bookId;
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    return this.http.post(url, bookId, { headers: header });
  }

  // make payment

  public makePayment(myFormValue: any) {
    const url = 'http://localhost:9091/payment/add';
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    return this.http.post(url, myFormValue, { headers: header });
  }

  // make order

  public makeOrder(myFormValue: any) {
    const url = 'http://localhost:9091/orders/order';
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    return this.http.post(url, myFormValue, { headers: header });
  }

  // get all the orders
  public getAllOrders() {
    const url = 'http://localhost:9091/orders/all';
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    return this.http.get(url, { headers: header });
  }

  // post Ratings

  public postRating(value: any) {
    const url = 'http://localhost:9091/ratings/add';
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    return this.http.post(url, value, { headers: header });
  }

  // get all the orders admin access

  public getAllTheOrders() {
    const url = 'http://localhost:9091/orders/show/all';
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    return this.http.get(url, { headers: header });
  }

  // get refund
  public getRefund() {
    const url = 'http://localhost:9091/orders/refund';
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    return this.http.get(url, { headers: header });
  }

}
