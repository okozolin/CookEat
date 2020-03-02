import {Component, OnInit, ViewChild } from "@angular/core";
import {FilterContainerComponent} from "../filter/container/container.component";

@Component({
  selector: "app-main",
  templateUrl: "main.component.html",
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @ViewChild('snav') sideNav: any;

  @ViewChild(FilterContainerComponent) searchChildComp;
  constructor() {}

  ngOnInit() {}

  sideNavToggle() {
    this.sideNav.toggle();
  }
}
