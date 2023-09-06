import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  public showAllCartItems(listOfBook: any) {
    const url = 'http://localhost:9091/cart/all2';
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    return this.http.post(url, listOfBook, { headers: header });
  }

}
