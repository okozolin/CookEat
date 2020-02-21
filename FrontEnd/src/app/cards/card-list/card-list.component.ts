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

  // cards : Card[] = [
  //   new Card('Healthy Vegan Gourmet Class by Phyllis Glazer','Vegan','Tel-Aviv',300,4,new Date(2019,12,31),'http://via.placeholder.com/250x150'),
  //   new Card('Meat and Beer Class by Yigal Mulner','Meat','Tel-Aviv',330,5,new Date(2020,1,26),'http://via.placeholder.com/250x150'),
  //   new Card('Mediterranean Fish Class by Amir Schuler','Fish','Tel-Aviv',280,3.5,new Date(2020,1,17),'http://via.placeholder.com/250x150'),
  //   new Card('Interactive Thai Cooking Class','Thai','Online',150,4,new Date(2020,1,31  ),'http://via.placeholder.com/250x150'),
  //   new Card('Cooking Burgers','Meat','Tel-Aviv',280,3.5,new Date(2020,1,17),'http://via.placeholder.com/250x150'),
  //   new Card('Healthy Vegan Gourmet Class by Phyllis Glazer','Vegan','Tel-Aviv',300,4,new Date(2019,12,31),'http://via.placeholder.com/250x150'),
  //   new Card('Meat and Beer Class by Yigal Mulner','Meat','Tel-Aviv',330,5,new Date(2020,1,26),'http://via.placeholder.com/250x150'),
  //   new Card('Mediterranean Fish Class by Amir Schuler','Fish','Tel-Aviv',280,3.5,new Date(2020,1,17),'http://via.placeholder.com/250x150'),
  //   new Card('Interactive Thai Cooking Class','Thai','Online',150,4,new Date(2020,1,31  ),'http://via.placeholder.com/250x150'),
  //   new Card('Cooking Burgers','Meat','Tel-Aviv',280,3.5,new Date(2020,1,17),'http://via.placeholder.com/250x150')
  // ];
  constructor(private service : CookeatService) { }

  courses : Card[] = [];

  onCardSelected(cardItem: Card){
    this.cardWasSelected.emit(cardItem);
  }

  ngOnInit() {
    this.service.GetCourses().subscribe(res => this.courses = res)


  }

}
