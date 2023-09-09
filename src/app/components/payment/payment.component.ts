import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookutilityService } from 'src/app/services/bookutility.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  amountData: any;

  constructor(private bookUtilityService: BookutilityService
    , private route: Router, private route1: ActivatedRoute
  ) {
    this.amountData = this.route1.snapshot.paramMap.get('amountData');
    console.log(this.amountData);
  }

  paymentForm(myForm: NgForm) {
    console.log(myForm);
    this.bookUtilityService.makePayment(myForm).subscribe();
    this.route.navigateByUrl('/make-order');
  }

}
