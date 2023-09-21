import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NavbarService } from 'src/app/services/navbar.service';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  error: any;

  constructor(private signUp: SignupService, public nav: NavbarService) { }
  ngOnInit(): void {
    this.nav.hide();
  }

  public formSubmit(myForm: NgForm) {
    if (JSON.stringify(myForm.value.name).length < 5) {
      alert('Invalid Name!!')
    } else if (JSON.stringify(myForm.value.username).length < 5) {
      alert('Username size must be greater than 5')
    } else if (!this.hasNumber(JSON.stringify(myForm.value.username))) {
      alert('username should contains atleast a number')
    } else if (JSON.stringify(myForm.value.address).length < 5) {
      alert('Invalid Address');
    } else if (JSON.stringify(myForm.value.email).length < 5) {
      alert('Invalid Email');
    } else if (!JSON.stringify(myForm.value.email).includes('@')) {
      alert('Email Should contains @');
    } else if (JSON.stringify(myForm.value.phone).length != 10) {
      alert('Phone Number size should be 10');
    } else if (JSON.stringify(myForm.value.password).length < 5) {
      alert('Password Needs to be Strong');
    } else if (JSON.stringify(myForm.value.date).length < 6) {
      alert('Invalid Date');
    } else if (JSON.stringify(myForm.value.gender).length < 1) {
      alert('Invalid Gender!!')
    } else {
      this.signUp.signUpUser(myForm.value).subscribe((res: any) => {
        console.warn(res);
      }, error => { // second parameter is to listen for error
        console.log(error);
        this.error = JSON.stringify(error.error.text);
        console.log(error.status);
        if (error.status == 200) {
          alert(error.error.text);
        } else {
          alert(error.error);
        }
      });
    }
  }


  // to check string contains number or not
  public hasNumber(myString: string) {
    return /\d/.test(myString);
  }
}
