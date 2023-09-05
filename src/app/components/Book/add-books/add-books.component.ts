import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddAuthorService } from 'src/app/services/add-author.service';
import { AddBookService } from 'src/app/services/add-book.service';
import { AddPublisherService } from 'src/app/services/add-publisher.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

  error: any;

  authors: any;

  publishers: any;

  constructor(private addBookService: AddBookService, private addAuthorService: AddAuthorService, private addPublihserService: AddPublisherService) { }
  ngOnInit(): void {
    this.addPublihserService.getAllPublihser().subscribe((res) => {
      console.log(res);
      this.publishers = res;
    });

    this.addAuthorService.getAllAuthor().subscribe((res) => {
      console.log(res);
      this.authors = res;
    });
  }

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
