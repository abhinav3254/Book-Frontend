import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private userService: UserService) { }
  user: Root = {
    id: 0,
    username: '',
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    status: '',
    role: '',
    gender: '',
    registerDate: '',
    lastLogin: '',
    dateOfBirth: ''
  };

  ngOnInit(): void {
    this.userService.getUserDetails().subscribe((res) => {
      console.log(res);
      this.user = res as Root;
    });
  }

}
export interface Root {
  id: number
  username: string
  name: string
  email: string
  password: string
  phone: string
  address: string
  status: string
  role: string
  gender: string,
  registerDate: string,
  lastLogin: string,
  dateOfBirth: string
}
