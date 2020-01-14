import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/shared/card.model';
import { MatGridTile } from '@angular/material'

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {

  @Input() cardItem: Card;

  constructor() { }

  ngOnInit() {
  }
  
}
