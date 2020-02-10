import { Component, OnInit } from "@angular/core";
import { IFoodTypeStatus } from './IFoodTypeStatus.interface'

@Component({
  selector: "app-type",
  templateUrl: "type.component.html",
  styleUrls: ["type.component.css"]
})
export class TypeCheckBoxesComponent implements OnInit {
  cuisineTypes = [
    'Indian',
    'Chinese',
    'Italian',
    'Japanese',
    'Jewish',
    'American',
    'French',
    'Israeli'
  ];
  cuisineTypesChecked: IFoodTypeStatus[] = [];
  constructor() {}

  ngOnInit() {}
}
