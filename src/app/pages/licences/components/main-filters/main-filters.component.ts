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
    console.log(this.isDynamicFiltersActive);
  }

}
