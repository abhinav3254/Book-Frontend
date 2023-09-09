import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookutilityService } from 'src/app/services/bookutility.service';
import { AddedToastComponent } from '../../Toasts/added-toast/added-toast.component';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  constructor(private bookUtility: BookutilityService, private _snackBar: MatSnackBar) { }

  onSubmit(myFrom: NgForm) {
    console.log(myFrom.value);
    this.bookUtility.addCategory(myFrom.value).subscribe((res) => {
      // console.log(res);
    }, error => {
      console.log(error);
      if (error.status === 200) {
        // toast
        const durationInSeconds = 2;
        this._snackBar.openFromComponent(AddedToastComponent, {
          duration: durationInSeconds * 1000,
        });
      } else {
        window.alert('something went wrong')
      }
    });
  }

}
