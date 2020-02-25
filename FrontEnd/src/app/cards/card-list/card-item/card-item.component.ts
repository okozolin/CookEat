import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from 'src/app/shared/card.model';
import { MatDialog } from '@angular/material';
import { CardItemDetailsComponent } from '../../card-item-details/card-item-details.component';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})

export class CardItemComponent implements OnInit {
  @Input() cardItem: Card;

  arr_stars : number[] = [];

  constructor(private dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(CardItemDetailsComponent, { disableClose: false, width: '50%', data: this.cardItem })
  }

  ngOnInit() {
    this.arr_stars  = new Array(Math.round(this.cardItem.rank));
    console.log( this.arr_stars)
  }
}
