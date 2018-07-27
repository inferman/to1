import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  @Input() state;

  menuItemsList = [
    { title: 'Dashboard', iconClass: 'svg-ic-dashboard', link: 'dashboard' },
    { title: 'Deployment & configuration', iconClass: 'svg-ic-deployment', link: '#' },
    { title: 'Organization & settings', iconClass: 'svg-ic-organization', link: '#' },
    { title: 'Users & permissions', iconClass: 'svg-ic-users', link: '#' },
    { title: 'Software & services', iconClass: 'svg-ic-software', link: 'licences' },
    { title: 'Billing', iconClass: 'svg-billing', link: '#' },
    { title: 'Settings', iconClass: 'svg-ic-settings', link: '#' },
    { title: 'Logs', iconClass: 'svg-ic-logs', link: '#' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
