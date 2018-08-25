import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {
  @Input() tableData;

  ngOnInit() {
  }
}
