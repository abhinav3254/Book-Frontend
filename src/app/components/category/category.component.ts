import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookutilityService } from 'src/app/services/bookutility.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  data: any;
  categorySearch: any;
  constructor(private bookUtility: BookutilityService, private route: ActivatedRoute) {
    this.data = this.route.snapshot.paramMap.get('data');
    console.log(this.data);
  }

  ngOnInit(): void {

    this.bookUtility.searchBookByCategory(this.data).subscribe((res) => {
      console.log('mydata' + JSON.stringify(res));
      this.categorySearch = res;
    });
  }

  // Add to cart

  listOld: Array<number> = [];
  list: Array<number> = [];
  bookIdListLength: any = 0;
  data1 = {
    "list": [] as number[],
  };
  addToCart(bookId: any) {
    // Retrieve the old list from Local Storage
    const listOld = window.localStorage.getItem('list');
    const oldArray = listOld ? listOld.split(',').map(Number) : [];

    // Concatenate the old list with the new bookId and update this.list
    this.list = oldArray.concat(Number(bookId));

    // Store the updated list back in Local Storage
    window.localStorage.setItem('list', this.list.join(','));

    // Show alert so that the cart icon will get updated
    window.alert('Item Added to cart');

    // Optionally, update the bookIdListLength
    this.bookIdListLength = this.list.length;

    // Update data.list with the same data as this.list
    this.data1.list = this.list;

    // Log this.data for debugging purposes
    // console.log(this.data.list);
  }

  // view details
  public viewDetails(id: any) {
    window.localStorage.setItem('detailsToShow', id);
  }

}
