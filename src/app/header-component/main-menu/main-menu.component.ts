import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  @Input() state;

  menuItemsList = [
    { title: 'Dashboard', iconClass: 'svg-ic-dashboard' },
    { title: 'Deployment & configuration', iconClass: 'svg-ic-deployment' },
    { title: 'Organization & settings', iconClass: 'svg-ic-organization' },
    { title: 'Users & permissions', iconClass: 'svg-ic-users' },
    { title: 'Software & services', iconClass: 'svg-ic-software' },
    { title: 'Billing', iconClass: 'svg-billing' },
    { title: 'Settings', iconClass: 'svg-ic-settings' },
    { title: 'Logs', iconClass: 'svg-ic-logs' }
  ];

  onMenuStatusChange() {
    console.log('sadf');
  }

  constructor() { }

  ngOnInit() {
  }

}
