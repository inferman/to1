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

  discountTableData: Object;
  discountTableList: any[];

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


    this.discountTableList = ['Discount table#1', 'Discount table#5', 'Discount table Azure', 'Discount table#1', 'Discount table#2', 'Discount table#3', 'Discount table#5', 'Discount table Azure'];

    this.discountTableData = {
      tableHeadings: ['Level', 'discount %', 'CALCULATED margin %', 'fixed $', 'effective sales price $', 'effective margin %'],
      tableBody: [
        { discount: 0, calcMargin: 17.00, fixed: 2.00, effectivePrice: 12.50, effectiveMargin: 0 },
        { discount: 5, calcMargin: 16.15, fixed: 3.00, effectivePrice: 12.25, effectiveMargin: 5 },
        { discount: 10, calcMargin: 14.54, fixed: 1.80, effectivePrice: 12.25, effectiveMargin: 10 },
        { discount: 20, calcMargin: 15.00, fixed: 1.70, effectivePrice: 12.00, effectiveMargin: 15 },
        { discount: 20, calcMargin: 20.00, fixed: 1.60, effectivePrice: 11.75, effectiveMargin: 20 },
        { discount: 25, calcMargin: 25.00, fixed: 1.50, effectivePrice: 11.50, effectiveMargin: 25 },
        { discount: 30, calcMargin: 30.00, fixed: 1.40, effectivePrice: 11.50, effectiveMargin: 30 },
        { discount: 35, calcMargin: 35.00, fixed: 1.30, effectivePrice: 11.25, effectiveMargin: 35 },
        { discount: 40, calcMargin: 40.00, fixed: 1.20, effectivePrice: 11.00, effectiveMargin: 40 },
        { discount: 45, calcMargin: 45.00, fixed: 1.10, effectivePrice: 10.45, effectiveMargin: 45 }
      ]
    };
  }

  onGetTab(activeTab: TabProps) {
    this.currentTab = activeTab.type;
  }


}
