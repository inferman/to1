import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  @Input() state;
  @Output() menuToggler = new EventEmitter();

  menuItemsList = [
    {
      title: 'Dashboard',
      iconClass: 'svg-ic-dashboard',
      link: '/dashboard',
      isSubNavActive: false,
      subNav: []
    },
    {
      title: 'Deployment & configuration',
      iconClass: 'svg-ic-deployment',
      link: null,
      isSubNavActive: false,
      subNav: [
        { title: 'test1' },
        { title: 'test2' }
    ]
    },
    {
      title: 'Organization & settings',
      iconClass: 'svg-ic-organization',
      link: null,
      isSubNavActive: false,
      subNav: [{title: 'test1'}]
    },
    {
      title: 'Users & permissions',
      iconClass: 'svg-ic-users',
      link: null,
      isSubNavActive: false,
      subNav: [{title: 'test1'}]
    },
    {
      title: 'Software & services',
      iconClass: 'svg-ic-software',
      link: '/licences'
    },
    {
      title: 'Billing',
      iconClass: 'svg-billing',
      link: null,
      isSubNavActive: false,
      subNav: [{title: 'test1'}]
    },
    {
      title: 'Settings',
      iconClass: 'svg-ic-settings',
      link: null,
      isSubNavActive: false,
      subNav: [{title: 'test1'}]
    },
    {
      title: 'Logs',
      iconClass: 'svg-ic-logs',
      link: null,
      isSubNavActive: false,
      subNav: [{title: 'test1'}]
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onMenuClick(element) {
    if(!element.subNav.length) {
      this.menuToggler.emit(this.state = !this.state);
    } else {
      this.menuItemsList.forEach((item) => { item.isSubNavActive = false; });
      element.isSubNavActive = !element.isSubNavActive;
    }
  }

}
