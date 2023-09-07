import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookutilityService {

  dataFromSearchBar: any;

  constructor(private http: HttpClient) { }

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

}
