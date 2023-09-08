import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookutilityService } from 'src/app/services/bookutility.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  constructor(private bookUtility: BookutilityService) { }

  onSubmit(myFrom: NgForm) {
    console.log(myFrom.value);
    this.bookUtility.addCategory(myFrom.value).subscribe((res) => {
      // console.log(res);
    }, error => {
      console.log(error);
      if (error.status === 200) {
        window.alert('added book');
      } else {
        window.alert('something went wrong')
      }
    });
  }

}
