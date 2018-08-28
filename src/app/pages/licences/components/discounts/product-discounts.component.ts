import {Component, OnInit} from '@angular/core';
import {ProductDiscountsService} from './product-discounts.service';

@Component({
  selector: 'product-discounts',
  templateUrl: './product-discounts.component.html',
  styleUrls: ['./product-discounts.component.scss'],
  providers: [ProductDiscountsService]
})
export class ProductDiscountsComponent implements OnInit {
  discountTables: string[];
  discountData: any;

  constructor(private discountsService: ProductDiscountsService) {}

  ngOnInit() {
    this.discountTables = this.discountsService.getDiscountTableList();
    this.discountData = this.discountsService.getDiscountTableData();
  }
}
