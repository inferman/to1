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
  productUpdatesTable;
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

    this.currentTab = this.tabsHeaderData[3].type;

    this.productUpdatesTable = {
      headings: ['List price', 'ERP', 'ERP margin', 'sales margin', 'Fixed $', 'effective sales price', 'effective sales margin', 'MARGIN type', 'discount table'],
      bodyData: {
        listPrice: { currency: 'CHF', value: 93.62 },
        erp: { currency: 'CHF', value: 93.62 },
        erpMargin: { value: 93.62 },
        salesMargin: { value: 93.62 },
        fixedPrice: { currency: 'CHF', value: 12.18 },
        effectivePrice: { currency: 'CHF', value: 93.62 },
        effectiveMargin: { value: 93.62 },
        taxes: this.taxesList
      }
    };
  }

  onGetTab(activeTab: TabProps) {
    this.currentTab = activeTab.type;
  }


}
