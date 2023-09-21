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
    // const expiryDateString = myForm.value.expiryDate;
    // const expiryDate = new Date(expiryDateString);
    // const currentDate = new Date();
    // // console.log(myForm);
    // if (JSON.stringify(myForm.value.cardNumber).length != 16) {
    //   alert('Invalid Card Number')
    // } else if (JSON.stringify(myForm.value.bankName).length < 1) {
    //   alert('INVALID BANK NAME');
    // } else if (JSON.stringify(myForm.value.nameOnCard).length < 1) {
    //   alert('INVALID NAME');
    // } else if (JSON.stringify(myForm.value.cvv).length != 3) {
    //   alert('Invalid CVV');
    // } else if (expiryDate < currentDate) {
    //   alert('INVALID DATE')
    // } else {
    this.bookUtilityService.makePayment(myForm).subscribe();
    this.route.navigateByUrl('/make-order');
    // }
  }

}
