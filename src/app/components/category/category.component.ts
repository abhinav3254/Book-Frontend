import { Component, OnInit } from '@angular/core';
import { BookutilityService } from 'src/app/services/bookutility.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private bookUtility: BookutilityService) { }

  ngOnInit(): void {
    console.log(window.localStorage.getItem("category") + '---------');
    const value = window.localStorage.getItem("category");
    this.bookUtility.searchBookByCategory(value).subscribe((res) => {
      console.log(JSON.stringify(res));
    });
  }

}
