import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'customer-actions-menu',
  templateUrl: './customer-actions-menu.component.html',
  styleUrls: ['./customer-actions-menu.component.scss']
})
export class CustomerActionsMenuComponent implements OnInit {
  customerMenuVisible = false;
  constructor() { }

  ngOnInit() {
  }

  customerMenuToggler() {
    this.customerMenuVisible = !this.customerMenuVisible;
  }

}
