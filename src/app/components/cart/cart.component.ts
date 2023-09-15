import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  ngAfterViewChecked() {
    console.log('Change detection cycle');
  }

  // items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);

  public cartItems: Root[] = [];

  public sumOfFinalPrice: number = 0;

  constructor(private cartService: CartService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.cartService.showAllCartItems().subscribe((res: any) => {
      console.log(res);
      const thiscartItems = res as Root[];
      this.cartItems = thiscartItems
    });

    this.cartService.getSumOfAllFinalPrice().subscribe((res) => {
      this.sumOfFinalPrice = res as number;
    });
  }

  // checkout
  goToMakePayment() {
    this.route.navigate(['/payment', { amountData: this.sumOfFinalPrice }]);
  }
  error: any;
  increasesValue(value: any) {
    this.cartService.increasesValueInTheCart(value).subscribe((res) => {
      console.log(JSON.stringify(res));
    }, error => { // second parameter is to listen for error
      console.log(error);
      this.error = JSON.stringify(error.error.text);
      console.log(error.status);
      if (error.status == 200) {
        window.location.reload();
      } else if (error.status == 400) {
        alert("Limited Stock")
      }
    });
  }

  decreaseValue(value: any) {
    this.cartService.decreaseValueInTheCart(value).subscribe();
    window.location.reload();
  }

  deleteItemFromCartItem(value: any) {
    this.cartService.deleteItemFromCartItem(value).subscribe();
    window.location.reload();
    window.location.reload();
  }

  deletAllItems() {
    this.cartService.deletAllItems().subscribe();
    window.location.reload();
  }

}

export interface Root {
  id: number
  user: User
  book: Book
  bookPrice: number
  quantity: number
  cgst: number
  sgst: number
  discount: number
  finalPrice: number
}

export interface User {
  id: number
  username: string
  name: string
  email: string
  password: string
  phone: string
  address: string
  status: string
  role: string
}

export interface Book {
  id: number
  publishers: Publishers
  author: Author
  imageUrl: string
  isbn: string
  pageCount: string
  bookStatus: boolean
  publishDate: string
  title: string
  price: string
  description: string
  category: string
}

export interface Publishers {
  id: number
  publisherName: string
  country: string
}

export interface Author {
  id: number
  authorName: string
  dateOfBirth: string
}


