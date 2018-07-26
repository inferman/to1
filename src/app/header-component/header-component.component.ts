import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit {
  cspData = {
    cspLogo: '../../../assets/img/totalone-logo.svg',
    userData: {userName: 'Name', id: 1}
  };

  constructor() { }

  ngOnInit() {
  }

}
