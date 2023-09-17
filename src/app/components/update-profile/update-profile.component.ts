import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

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


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserDetails().subscribe((res) => {
      console.log(res);
      this.user = res as Root;
    });
  }

  formSubmit(myForm: NgForm) {
    this.userService.updateUserDetails(myForm.value).subscribe();
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

