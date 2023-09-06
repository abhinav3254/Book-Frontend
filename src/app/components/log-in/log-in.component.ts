import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  error: any;

  constructor(private logInService: LoginService, private route: Router) { }

  public onSubmit(myFrom: NgForm) {
    console.log(myFrom.value);
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
