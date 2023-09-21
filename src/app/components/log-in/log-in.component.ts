import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  error: any;

  constructor(private logInService: LoginService, private route: Router, public nav: NavbarService) { }
  ngOnInit(): void {
    this.nav.hide();
  }

  public onSubmit(myFrom: NgForm) {

    if (JSON.stringify(myFrom.value.username).length < 5) {
      alert('Username is too short')
    } else if (JSON.stringify(myFrom.value.password).length < 5) {
      alert("Password is too short!!")
    } else {

      this.logInService.logInUser(myFrom.value).subscribe((res) => {
      }, error => { // second parameter is to listen for error
        console.log(error);
        this.error = JSON.stringify(error.error.text);
        console.log(error.status);
        if (error.status == 200) {
          alert("welcome!" + myFrom.value.username);
          window.localStorage.setItem("token", error.error.text);
          this.route.navigateByUrl("/home");
        } else {
          alert("Wrong Credentails");
        }
      });
    }
  }

}
