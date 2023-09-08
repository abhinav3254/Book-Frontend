import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BookutilityService } from 'src/app/services/bookutility.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  categories: any;

  constructor(
    public nav: NavbarService,
    private bookUtilityService: BookutilityService,
    private router: Router,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    // this.checkUserRole();
    this.bookUtilityService.getAllCategory().subscribe((res) => {
      console.log(res);
      this.categories = res;
    });

    // Trigger change detection to refresh the view
    this.cdRef.detectChanges();
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

  public getValueFromCategory(value: any) {
    // Sending data from here to category route
    this.router.navigate(['/category', { data: value }]);

  }


}
