import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddBookService } from 'src/app/services/add-book.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent {

  error: any;

  constructor(private addBookService: AddBookService) { }

  onSubmit(myForm: NgForm) {
    console.log(myForm.value);
    this.addBookService.addBook(myForm.value).subscribe((res) => {
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
