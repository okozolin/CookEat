import { Component, OnInit } from "@angular/core";
import { IFoodTypeStatus } from './IFoodTypeStatus.interface'
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: "app-type",
  templateUrl: "type.component.html",
  styleUrls: ["type.component.css"]
})
export class TypeCheckBoxesComponent implements OnInit {
  typeForm: FormGroup;

  cuisineTypes = [
    {name: 'Indian',  selected: false, id: 1},
    {name:'Chinese',  selected: false, id: 2},
    {name: 'Italian', selected: false, id: 3},
    {name: 'Japanese',selected: false, id: 4},
    {name: 'Jewish',  selected: false, id: 5},
    {name: 'American',selected: false, id: 6},
    {name: 'French',  selected: false, id: 7},
    {name: 'Israeli', selected: false, id: 8},
  ];
  cuisineTypesChecked: IFoodTypeStatus[] = [];
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.typeForm = this.fb.group({
      types: this.buildCheckboxes()
    });
  }

  get types(): FormArray {
    return this.typeForm.get('types') as FormArray;
  }

  buildCheckboxes() {
    // set the initial state of the checkboxes according the selected property
    const arr = this.cuisineTypes.map(type => {
      return this.fb.control(type.selected);
    });
    return this.fb.array(arr);
  }
}
