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
    this.searchBoxFromComp = this.childSearchText.searchBox.value;
    this.typeCheckboxesFromComp = this.childTypeCheckboxesArr.selectedTypesValues;
    this.dateFromComp = this.childDate.datePicker.value;
  }

  formatDate(UTCDate): string {
    const dd = UTCDate._d.toDateString().split(' ')
    dd.shift()
    const formattedDate = dd.join('-');
    return formattedDate;
  }
  search() {
    this.searchBoxFromComp = this.childSearchText.searchBox.value;
    this.typeCheckboxesFromComp = this.childTypeCheckboxesArr.selectedTypesValues;
    this.dateFromComp = this.childDate.datePickerText.value;

    const searchObj = {
      freeText:   this.searchBoxFromComp,
      foodTypes:  this.typeCheckboxesFromComp,
      startDate:  this.formatDate(this.dateFromComp)
    }
    console.log("searchObj", searchObj);
  }
}
