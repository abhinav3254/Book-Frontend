import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddPublisherService } from 'src/app/services/add-publisher.service';

@Component({
  selector: 'app-add-publisher',
  templateUrl: './add-publisher.component.html',
  styleUrls: ['./add-publisher.component.css']
})
export class AddPublisherComponent {

  error: any;
  constructor(private addPublisherServices: AddPublisherService) { }

  public onSubmit(myForm: NgForm) {
    console.log(myForm.value);
    this.addPublisherServices.addPublisher(myForm.value).subscribe((res) => {
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
