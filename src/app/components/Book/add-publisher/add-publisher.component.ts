import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddPublisherService } from 'src/app/services/add-publisher.service';
import { AddedToastComponent } from '../../Toasts/added-toast/added-toast.component';

@Component({
  selector: 'app-add-publisher',
  templateUrl: './add-publisher.component.html',
  styleUrls: ['./add-publisher.component.css']
})
export class AddPublisherComponent {

  error: any;
  constructor(private addPublisherServices: AddPublisherService, private _snackBar: MatSnackBar) { }

  public onSubmit(myForm: NgForm) {
    console.log(myForm.value);
    this.addPublisherServices.addPublisher(myForm.value).subscribe((res) => {
      console.log(res);
    }, error => { // second parameter is to listen for error
      console.log(error);
      this.error = JSON.stringify(error.error.text);
      console.log(error.status);
      if (error.status == 200) {
        // toast
        const durationInSeconds = 2;
        this._snackBar.openFromComponent(AddedToastComponent, {
          duration: durationInSeconds * 1000,
        });
      } else {
        alert(error.error);
      }
    });
  }

}
