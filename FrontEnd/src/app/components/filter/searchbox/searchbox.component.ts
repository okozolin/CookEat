import { Component, OnInit } from "@angular/core";
import {AbstractControl, FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: "app-searchbox",
  templateUrl: "searchbox.component.html",
  styleUrls: ["searchbox.component.css"]
})
export class SearchBoxComponent implements OnInit {
  searchBoxForm: FormGroup;
  searchBoxText = new FormControl()
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.searchBoxForm = this.fb.group({
      searchBox: this.searchBoxText
    });
  }

  // getter for the type control i.e search box of free text
  get searchBox(): AbstractControl {
    return this.searchBoxForm.get('searchBox');
  }

  addFreeTextControl() {
    return this.fb.control(this.searchBox);
  }
}
