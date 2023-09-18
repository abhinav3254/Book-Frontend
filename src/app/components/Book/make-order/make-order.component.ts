import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

import { BookutilityService } from 'src/app/services/bookutility.service';

@Component({
  selector: 'app-make-order',
  templateUrl: './make-order.component.html',
  styleUrls: ['./make-order.component.css']
})
export class MakeOrderComponent {


  constructor(private bookUtilityService: BookutilityService,
    private route: Router
  ) {
  }



  public makeOrder(myFormValue: any) {
    this.bookUtilityService.makeOrder(myFormValue).subscribe(
      (res) => {
        console.log('order subscribe');

        console.log(res);

      }, error => { // second parameter is to listen for error
        if (error.status == 200) {
          alert('order placed');
        } else {
          alert("order can't be placed");
        }
      });
    this.route.navigateByUrl('/order');
  }




}
