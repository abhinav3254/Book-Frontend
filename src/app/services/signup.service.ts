import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  public signUpUser(myFormValue: any): Observable<any> {
    const url = 'http://localhost:9091/user/signup';
    return this.http.post(url, myFormValue);
  }

}
