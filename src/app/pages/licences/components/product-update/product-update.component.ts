import {Component, OnInit} from '@angular/core';
import {ProductUpdateService} from './product-update.service';

@Component({
  selector: 'product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss'],
  providers: [ProductUpdateService]
})
export class ProductUpdateComponent implements OnInit {
  tableData: any;

  constructor(private productUpdateService: ProductUpdateService) {}

  ngOnInit() {
    this.tableData = this.productUpdateService.getTbleData();
  }
}
