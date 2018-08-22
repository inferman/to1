import { Component, OnInit } from '@angular/core';

import {FiltersService} from '../../services/filters.service';
import {log} from 'util';

@Component({
  selector: 'main-filters',
  templateUrl: './main-filters.component.html',
  styleUrls: ['./main-filters.component.scss'],
  providers: [FiltersService]
})
export class MainFiltersComponent implements OnInit {

  tabsList = [];
  categoriesList = [];
  dinamicFiltersList = [];
  mainActiveTab = '';
  secondActiveTab = '';
  isDynamicFiltersActive = false;
  prop = {isBordered: true, initText: 'Select'};
  languagesList = [
    { id: 1, text: 'English' },
    { id: 2, text: 'Ukrainian' },
    { id: 3, text: 'Deutsch' }
  ];
  currenciesList = [
    { id: 1, text: '$ USD United States' },
    { id: 2, text: '€ EUR' },
    { id: 3, text: '£ GBP Pound Sterling' },

  ];

  config = {
    firstDayOfWeek: 'mo',
    monthFormat: 'MMM, YYYY',
    disableKeypress: false,
    allowMultiSelect: false,
    closeOnSelect: false,
    closeOnSelectDelay: 100,
    onOpenDelay: 0,
    weekDayFormat: 'ddd',
    appendTo: document.body,
    drops: 'down',
    opens: 'down',
    showNearMonthDays: false,
    showWeekNumbers: false,
    enableMonthSelector: true,
    format: "MMM/YYYY",
    yearFormat: 'YYYY',
    showGoToCurrent: false,
    dayBtnFormat: 'DD',
    monthBtnFormat: 'MMM',
    hours12Format: 'hh',
    hours24Format: 'HH',
    meridiemFormat: 'A',
    minutesFormat: 'mm',
    minutesInterval: 1,
    secondsFormat: 'ss',
    secondsInterval: 1,
    showSeconds: false,
    showTwentyFourHours: true,
    timeSeparator: ':',
    multipleYearsNavigateBy: 10,
    showMultipleYearsNavigation: false,
  };
  today = new Date();
  currentMonth = this.today.toLocaleString('en-us', { month: 'short' });
  selectedMonth = this.currentMonth + '/' + this.today.getFullYear();

  constructor(private filtersService: FiltersService) { }

  ngOnInit() {
    this.tabsList = this.filtersService.getData('tabsList');
    this.categoriesList = this.filtersService.getData('categoriesList');
    this.dinamicFiltersList = this.filtersService.getData('dinamicFiltersList');
  }


  setActiveMainTab(elem) {
    if (elem.title !== this.mainActiveTab) {
      this.mainActiveTab = elem.title;
    }
  }

  setSecondMainTab(elem) {
    if (elem.title !== this.secondActiveTab) {
      this.secondActiveTab = elem.title;
    }
  }

  toggleDynamicFilters() {
    this.isDynamicFiltersActive = !this.isDynamicFiltersActive;
  }

  onLanguageSelected(event) {
    // console.log(event);
  }

  onCurrencySelected(event) {
    // console.log(event);
  }

  onDateChange(event) {
    this.selectedMonth = event;
    // console.log(this.selectedMonth);
  }

}
