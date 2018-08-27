import { Component, OnInit } from '@angular/core';
import { CustomersService } from './product-customers.service';

@Component({
  selector: 'product-customers',
  templateUrl: './product-customers.component.html',
  styleUrls: ['./product-customers.component.scss'],
  providers: [CustomersService]
})
export class ProductCustomersComponent implements OnInit {
  customersData: any[];

  constructor(private customersService: CustomersService) {}

  ngOnInit() {
    this.customersData = this.customersService.getCustomersData();
    console.log(this.customersData);
  }
}
