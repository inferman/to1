import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'licences',
  templateUrl: './licences.component.html',
  styleUrls: ['./licences.component.scss']
})
export class LicencesComponent implements OnInit {
  tabsHeaderData: any[];
  activeTemplate = 'template1';
  constructor() { }

  ngOnInit() {
    this.tabsHeaderData = [
      {title: 'values', type: 'values'},
      {title: 'discount tables', type: 'discount'},
      {title: 'customers', type: 'customers'},
      {title: 'defaults', type: 'defaults'}
    ];
  }

}
