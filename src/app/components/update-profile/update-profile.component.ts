import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent {

  constructor(private userService: UserService) { }

  formSubmit(myForm: NgForm) {
    console.log(myForm.value);
    this.userService.updateUserDetails(myForm.value).subscribe();
  }
}
