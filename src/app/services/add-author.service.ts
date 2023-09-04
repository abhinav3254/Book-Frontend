import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddAuthorService {

  constructor(private http: HttpClient) { }
  public addAuthor(myFormValue: any): Observable<any> {
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    const url = 'http://localhost:9091/author/add';
    return this.http.post(url, myFormValue, { headers: header });
  }

}
