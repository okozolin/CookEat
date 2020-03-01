import {Component, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import { Card } from 'src/app/shared/card.model';
import { CookeatService } from '../../cookeat.service';
import { Subscription } from "rxjs";


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit, OnDestroy {

  @Output() cardWasSelected = new EventEmitter<Card>();

  courses;
  private coursesSubs: Subscription;

  constructor(private service : CookeatService) { }

  onCardSelected(cardItem: Card){
    this.cardWasSelected.emit(cardItem);
  }

  ngOnInit() {
    this.coursesSubs = this.service.getCourses().subscribe(res => this.courses = res);
  }

  ngOnDestroy(): void {
    this.coursesSubs.unsubscribe();
  }
}
