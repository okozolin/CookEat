import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Card } from 'src/app/shared/card.model';
import { CookeatService } from '../../cookeat.service';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  @Output() cardWasSelected = new EventEmitter<Card>();
  
  courses : Card[] = [];

  constructor(private service : CookeatService) { }

  onCardSelected(cardItem: Card){
    this.cardWasSelected.emit(cardItem);
  }

  ngOnInit() {
    this.service.GetCourses().subscribe(res => this.courses = res)
  }

}
