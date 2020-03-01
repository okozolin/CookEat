import {AfterViewInit, Component, ViewChild} from "@angular/core";
import { SearchBoxComponent } from '../searchbox/searchbox.component'
import { TypeCheckBoxesComponent } from '../type/type.component'
import { DatePickerComponent } from "../datepicker/datepicker.component";
import {CookeatService} from "../../../cookeat.service";

@Component({
  selector: "app-filtercontainer",
  templateUrl: "container.component.html",
  styleUrls: ["container.component.css"]
})
export class FilterContainerComponent implements AfterViewInit {

  constructor(private service : CookeatService) { }

  courses;

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

  formatFoodType(foodTypeArr): string {
    if (foodTypeArr.length !== 0) {
      const tmpFtArr = [...foodTypeArr];
      return tmpFtArr.map( item => "foodType[]=" + item).join('&')
    } else {
      return ''; }
  }

  formatDate(UTCDate): string {
    if (UTCDate) {
      const d = UTCDate._i
      const yyyymmdd = `${d.year}-${d.month}-${d.date}`
      return "date=" + yyyymmdd;
    } else {
      return ''; }
  }

  searchString(searchObj): string {
    return this.formatFoodType(searchObj.foodTypes) + '&' + this.formatDate(searchObj.startDate)
  }

  search() {
    this.searchBoxFromComp = this.childSearchText.searchBox.value;
    this.typeCheckboxesFromComp = this.childTypeCheckboxesArr.selectedTypesValues;
    this.dateFromComp = this.childDate.datePickerText.value;

    // const searchString = 'foodType=Chinese&date=2020-2-12'
    const searchObj = {
      freeText:   this.searchBoxFromComp,
      foodTypes:  this.typeCheckboxesFromComp,
      startDate:  this.dateFromComp
    }
    this.service.getCourses(20, 0, 'owner', this.searchString(searchObj));
  }
}
