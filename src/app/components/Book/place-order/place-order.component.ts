import { Component, OnInit } from '@angular/core';
import { BookutilityService } from 'src/app/services/bookutility.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {


  constructor(private bookUtilityService: BookutilityService) { }

  orders: any;

  ngOnInit(): void {
    this.bookUtilityService.getAllOrders().subscribe((res) => {
      this.orders = res;
    });
  }

}

