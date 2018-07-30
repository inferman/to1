import { Component, OnInit } from '@angular/core';

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

  navOpened = false;

  constructor() { }

  ngOnInit() {
  }

  onMenuStateChange() {
    this.navOpened = !this.navOpened;
  }

}
