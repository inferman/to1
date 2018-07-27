import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'customer-actions-menu',
  templateUrl: './customer-actions-menu.component.html',
  styleUrls: ['./customer-actions-menu.component.scss']
})
export class CustomerActionsMenuComponent implements OnInit {
  @Input() currentUser: {
    cspLogo: string,
    userData: {userName: string, id: number}
  };
  customerMenuVisible = false;
  constructor() { }
  @Input() state: boolean;

  ngOnInit() {
  }

  customerMenuToggler() {
    this.customerMenuVisible = !this.customerMenuVisible;
  }

}
