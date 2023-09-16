import { Component, OnInit } from '@angular/core';
import { BookutilityService } from 'src/app/services/bookutility.service';

@Component({
  selector: 'app-refund',
  templateUrl: './refund.component.html',
  styleUrls: ['./refund.component.css']
})
export class RefundComponent implements OnInit {

  refunds: Orders[] = [];

  constructor(private bookService: BookutilityService) { }
  ngOnInit(): void {
    this.bookService.getRefund().subscribe((res) => {
      console.log(res);
      this.refunds = res as Orders[];
    });
  }

}

export interface Orders {
  id: number;
  cart: null;
  user: User;
  payment: Payment;
  address: string;
  orderDate: Date;
}

export interface Payment {
  pid: number;
  user: null;
  cardNumber: string;
  bankName: string;
  nameOnCard: string;
  cvv: string;
  expiryDate: Date;
  amount: number;
}

export interface User {
  id: number;
  username: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  status: string;
  role: string;
  dateOfBirth: Date;
  gender: string;
  registerDate: Date;
  lastLogin: Date;
}

