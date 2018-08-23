import { Component, OnInit } from '@angular/core';
import {TabProps} from '../../interfaces/tab-props';
import {TabTypes} from '../../interfaces/tabs-types';


@Component({
  selector: 'licences',
  templateUrl: './licences.component.html',
  styleUrls: ['./licences.component.scss']
})
export class LicencesComponent implements OnInit {
  tabsHeaderData: TabProps[];
  taxesList: {id: number, text: string}[];
  currentTab: TabTypes;

  tabTypes = TabTypes;

  constructor() { }

  ngOnInit() {
    this.tabsHeaderData = [
      { title: 'values', type: TabTypes.productUpdate },
      { title: 'discount tables', type: TabTypes.discounts },
      { title: 'customers', type: TabTypes.customers },
      { title: 'defaults', type: TabTypes.defaultSetForm }
    ];

    this.taxesList = [{id: 1, text: 'tax category HS'}, {id: 2, text: 'tax category HTS'}];

    this.currentTab = this.tabsHeaderData[0].type;
  }

  onGetTab(activeTab: TabProps) {
    this.currentTab = activeTab.type;
  }


}
