import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-datepicker',
  templateUrl: 'datepicker.component.html'
})

export class DatePickerComponent implements OnInit {
  datePickerForm: FormGroup;
  datePickerText = new FormControl()
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.datePickerForm = this.fb.group({
      datePicker: this.datePickerText
    });
  }

  // getter for the type control i.e search box of free text
  get datePicker(): AbstractControl {
    return this.datePickerForm.get('datePicker');
  }

  addDatePickerControl() {
    let tmp = this.fb.control(this.datePicker);
    console.log("tmp datePickerForm", tmp)
    console.log("datePickerForm", this.datePickerForm.controls)
    return tmp;
  }
}
