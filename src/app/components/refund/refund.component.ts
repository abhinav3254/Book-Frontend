import { Component, OnInit } from '@angular/core';
import { BookutilityService } from 'src/app/services/bookutility.service';

@Component({
  selector: 'app-refund',
  templateUrl: './refund.component.html',
  styleUrls: ['./refund.component.css']
})
export class RefundComponent implements OnInit {

  refund: any;

  constructor(private bookService: BookutilityService) { }
  ngOnInit(): void {
    this.bookService.getRefund().subscribe((res) => {
      console.log(res);
      this.refund = res;
    });
  }

}
