import { Component, OnInit } from '@angular//core';
import {ProductsTableService} from '../../services/products-table.service';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  providers: [ProductsTableService]
})
export class ProductsListComponent implements OnInit {

  productsList = [];
  headerItemsList = [];

  constructor(private productsService: ProductsTableService) {}

  ngOnInit() {
    this.headerItemsList = this.productsService.getData('tableHeaderFields');
    this.productsList = this.productsService.getData('productsList');
  }

}
