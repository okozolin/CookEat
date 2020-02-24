import { Component, OnInit, Input, Inject } from '@angular/core';
import { Card } from 'src/app/shared/card.model';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-card-item-details',
  templateUrl: './card-item-details.component.html',
  styleUrls: ['./card-item-details.component.css']
})
export class CardItemDetailsComponent implements OnInit {

  @Input() card : Card;

  arr_stars : number[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Card
  ) { }

  ngOnInit() {
    this.card = this.data;
    this.arr_stars  = new Array(Math.round(this.card.rank));
  }

 
}
