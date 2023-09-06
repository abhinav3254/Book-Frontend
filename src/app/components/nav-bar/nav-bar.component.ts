import { Component } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  logout() {
    window.localStorage.removeItem('token');
    window.alert('Logged Out');
  }

  constructor(public nav: NavbarService) { }

}
