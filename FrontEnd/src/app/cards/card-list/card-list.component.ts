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
  
  //courses : Card[] = [];

  cards : Card[] = [
    new Card('Healthy Vegan Gourmet Class by Phyllis Glazer','Vegan','Tel-Aviv',300,4,new Date(2019,12,31),'https://i.udemycdn.com/course/480x270/398558_8920_2.jpg','4 weeks','','Use common kitchen ingredients for natural herbal medicine and home remedies'),
    new Card('Meat and Beer Class by Yigal Mulner','Meat','Tel-Aviv',330,5,new Date(2020,1,26),'https://i.udemycdn.com/course/480x270/1725790_bbe1.jpg','4 weeks','','Cook like a pro, master the basic techniques used in the Worlds culinary industry'),
    new Card('Mediterranean Fish Class by Amir Schuler','Fish','Tel-Aviv',280,3.5,new Date(2020,1,17),'https://i.udemycdn.com/course/480x270/1132186_1ecd_2.jpg','4 weeks','','Cook like a pro, master the basic techniques used in the Worlds culinary industry'),
    new Card('Interactive Thai Cooking Class','Thai','Online',150,4,new Date(2020,1,31  ),'https://i.udemycdn.com/course/480x270/469850_25cb.jpg','4 weeks','','Learn to how cook better than restaurant Thai food as you discover new ingredients and elevate your cooking skills'),
    new Card('Cooking Burgers','Meat','Tel-Aviv',280,3.5,new Date(2020,1,17),'https://i.udemycdn.com/course/480x270/1195252_1b91_2.jpg','4 weeks','','Learn to how cook better than restaurant Thai food as you discover new ingredients and elevate your cooking skills'),
    new Card('Healthy Vegan Gourmet Class by Phyllis Glazer','Vegan','Tel-Aviv',300,4,new Date(2019,12,31),'https://i.udemycdn.com/course/480x270/626076_2ade_3.jpg','4 weeks','','A practical course to take your cooking skills from dull to delicious'),
    new Card('Meat and Beer Class by Yigal Mulner','Meat','Tel-Aviv',330,5,new Date(2020,1,26),'https://i.udemycdn.com/course/480x270/1751546_58f9_2.jpg','4 weeks','','Cook like a pro, master the basic techniques used in the Worlds culinary industry'),
    new Card('Mediterranean Fish Class by Amir Schuler','Fish','Tel-Aviv',280,3.5,new Date(2020,1,17),'https://i.udemycdn.com/course/480x270/189224_2719_7.jpg','4 weeks','','A practical course to take your cooking skills from dull to delicious'),
    new Card('Interactive Thai Cooking Class','Thai','Online',150,4,new Date(2020,1,31  ),'https://i.udemycdn.com/course/480x270/8471_5816_5.jpg','4 weeks','','A practical course to take your cooking skills from dull to delicious'),
    new Card('Cooking Burgers','Meat','Tel-Aviv',280,3.5,new Date(2020,1,17),'https://i.udemycdn.com/course/480x270/1616902_9b5e.jpg','4 weeks','','Learn how to identify wild foods as well as forage for and prepare them')
  ];

  constructor(private service : CookeatService) { }

  onCardSelected(cardItem: Card){
    this.cardWasSelected.emit(cardItem);
  }

  ngOnInit() {
    // remove remark after the service will be ready
   // this.service.GetCourses().subscribe(res => this.courses = res)
  }

}
