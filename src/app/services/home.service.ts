import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  public getAllBooks(): Observable<any> {
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    const url = 'http://localhost:9091/book/all';
    return this.http.get(url, { headers: header });
  }

  public addToCart(list: string) {
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    const url = 'http://localhost:9091/cart/add';
    return this.http.post(url, list, { headers: header })
  }

}
