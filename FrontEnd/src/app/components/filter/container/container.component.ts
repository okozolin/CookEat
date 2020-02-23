import {AfterViewInit, Component, ViewChild} from "@angular/core";
import { SearchBoxComponent } from '../searchbox/searchbox.component'
import { TypeCheckBoxesComponent } from '../type/type.component'
import { DatePickerComponent } from "../datepicker/datepicker.component";

@Component({
  selector: "app-filtercontainer",
  templateUrl: "container.component.html",
  styleUrls: ["container.component.css"]
})
export class FilterContainerComponent implements AfterViewInit {

  constructor() {}

  searchBoxFromComp: string;
  @ViewChild(SearchBoxComponent) childSearchText;

  typeCheckboxesFromComp: [] ;
  @ViewChild(TypeCheckBoxesComponent) childTypeCheckboxesArr;

  dateFromComp: string;
  @ViewChild(DatePickerComponent) childDate;

  ngAfterViewInit() {
    this.searchBoxFromComp = this.childSearchText.message;
    this.typeCheckboxesFromComp = this.childTypeCheckboxesArr.selectedTypesValues;
    this.dateFromComp = this.childDate.message;
  }

  search() {
    this.searchBoxFromComp = this.childSearchText.message;
    this.typeCheckboxesFromComp = this.childTypeCheckboxesArr.selectedTypesValues;
    this.dateFromComp = this.childDate.message;

    console.log("this.childTypeCheckboxesArr.selectedTypesValues", this.childTypeCheckboxesArr.selectedTypesValues)
    console.log("this.typeCheckboxesFromComp", this.typeCheckboxesFromComp)
    // console.log('pressed search: ' + JSON.stringify(this.filterForm.value));
  }

}
