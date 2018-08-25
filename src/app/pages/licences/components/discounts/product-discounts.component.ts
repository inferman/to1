import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'product-discounts',
  templateUrl: './product-discounts.component.html',
  styleUrls: ['./product-discounts.component.scss']
})
export class ProductDiscountsComponent implements OnInit {
  @Input() discountTables;
  @Input() discountData;

  ngOnInit() {
  }
}
