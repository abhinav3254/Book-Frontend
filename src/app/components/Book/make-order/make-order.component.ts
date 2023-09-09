import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    this.bookUtilityService.makeOrder(myFormValue).subscribe();
    this.route.navigateByUrl('/home');
  }

}
