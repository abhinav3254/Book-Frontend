import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUserDetails() {
    const url = 'http://localhost:9091/user/profile';
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    return this.http.get(url, { headers: header });
  }
  //updateProfile
  public updateUserDetails(myFormValue: any) {
    const url = 'http://localhost:9091/user/updateProfile';
    var header = new HttpHeaders().set("Authorization", "Bearer " + window.localStorage.getItem("token"));
    return this.http.post(url, myFormValue, { headers: header });
  }
}
