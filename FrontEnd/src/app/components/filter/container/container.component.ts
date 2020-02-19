import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: "app-filtercontainer",
  templateUrl: "container.component.html",
  styleUrls: ["container.component.css"]
})
export class FilterContainerComponent implements OnInit {
  filterForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    console.log("this.fb", this.fb)
    this.filterForm = this.fb.group({
      searchBox: [''],
      foodType: [''],
      datePicker: ['']
    })
  }

  search() {
    console.log("this.fb", this.fb)

    console.log('this.customerForm', this.filterForm);
    console.log('pressed search: ' + JSON.stringify(this.filterForm.value));
  }

}
