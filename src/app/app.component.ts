import { Component } from '@angular/core';
import{FormControl,FormGroup,FormBuilder,Validators,FormArray} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dummy-v9';
  salesSearchForm:FormGroup


  submit(){
    console.log(this.salesSearchForm.value);
  }
}
