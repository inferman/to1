import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  @Input() state;
  @Output() menuToggler = new EventEmitter();

  menuItemsList = [
    { title: 'Dashboard', iconClass: 'svg-ic-dashboard', link: 'dashboard' },
    { title: 'Deployment & configuration', iconClass: 'svg-ic-deployment', link: null, subNav: [{}] },
    { title: 'Organization & settings', iconClass: 'svg-ic-organization', link: null, subNav: [{}] },
    { title: 'Users & permissions', iconClass: 'svg-ic-users', link: null, subNav: [{}] },
    { title: 'Software & services', iconClass: 'svg-ic-software', link: 'licences'},
    { title: 'Billing', iconClass: 'svg-billing', link: null, subNav: [{}] },
    { title: 'Settings', iconClass: 'svg-ic-settings', link: null, subNav: [{}] },
    { title: 'Logs', iconClass: 'svg-ic-logs', link: null, subNav: [{}] },
  ];

  constructor(private route: Router) {
  }

  ngOnInit() {
  }

  onMenuClick(element, rla) {
    if(element && !element.subNav)
      this.menuToggler.emit( this.state = !this.state );
  }

}
