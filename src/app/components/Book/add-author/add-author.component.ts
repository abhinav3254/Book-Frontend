import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatCalendarCellClassFunction, MatDatepickerModule } from '@angular/material/datepicker';
import { AddAuthorService } from 'src/app/services/add-author.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css'],
})
export class AddAuthorComponent {
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }

    return '';
  };

  error: any;
  constructor(private addAuthorService: AddAuthorService) { }
  onSubmit(myForm: NgForm) {
    console.log(myForm.value)
    this.addAuthorService.addAuthor(myForm.value).subscribe((res) => {
      console.log(res);
    }, error => { // second parameter is to listen for error
      console.log(error);
      this.error = JSON.stringify(error.error.text);
      console.log(error.status);
      if (error.status == 200) {
        alert(error.error.text);
      } else {
        alert(error.error);
      }
    });
  }
}
