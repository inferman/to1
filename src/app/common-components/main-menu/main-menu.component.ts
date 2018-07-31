import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router, ParamMap, NavigationStart, NavigationEnd} from '@angular/router';
import { map, filter, scan, groupBy } from 'rxjs/operators';

import { MenuService } from '../../services/menu-service.service';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  menuItemsList;
  currentUrl;
  menuActive = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private menuService: MenuService
  ) {
  }

  ngOnInit() {
    this.menuItemsList = this.menuService.getMenuList();
    this.menuService.isMenuActive.subscribe(() => {
      this.toggleMenu();
    });
  }

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  onMenuClick(element) {
    if (element.subNav && element.subNav.length) {
      this.menuItemsList.forEach((item) => { item.isSubNavActive = false; });
      element.isSubNavActive = !element.isSubNavActive;
    } else { this.toggleMenu(); }
    /*this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      //last()
    ).subscribe((event: NavigationEnd) => { console.log(event); });*/
  }

}
