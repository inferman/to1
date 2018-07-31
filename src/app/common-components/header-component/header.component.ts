import { Component, OnInit } from '@angular/core';

import {MenuService} from '../../services/menu-service.service';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cspData = {
    // cspLogo: '../../../assets/img/totalone-logo.svg',
    userData: {userName: 'Name', id: 1}
  };

  constructor(private menuService: MenuService) { }

  ngOnInit() {
  }

  onNavClick() {
    this.menuService.isMenuActive.next();
  }

}
