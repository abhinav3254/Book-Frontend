import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public nav: NavbarService) {
  }
  ngOnInit(): void {
    // this.checkUserRole();
  }

  logout() {
    window.localStorage.clear();
    window.alert('Logged Out');
  }

  public checkUserRole(): Boolean {
    if (localStorage.getItem("role") === null) {
      return false;
    } else {
      return true;
    }
  }


}
