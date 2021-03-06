import { Component, Input, OnInit } from '@angular/core';
import { ViewEncapsulation } from '../../../../node_modules/@angular/compiler/src/core';

export enum CardItemType {
  forward = 'forward',
  back = 'back',
  expandCollapse = 'expand-collapse',
  none = 'none'
}

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
  CardItemType = CardItemType;
  @Input()
  header = '';

  @Input()
  headerValue = '';

  @Input()
  type: CardItemType = CardItemType.none;

  @Input()
  isOpen = false;

  constructor() {}

  ngOnInit() {}
}
