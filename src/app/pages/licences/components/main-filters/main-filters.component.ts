import { Component, OnInit } from '@angular/core';

import {FiltersService} from '../../services/filters.service';

@Component({
  selector: 'main-filters',
  templateUrl: './main-filters.component.html',
  styleUrls: ['./main-filters.component.scss'],
  providers: [FiltersService]
})
export class MainFiltersComponent implements OnInit {

  tabsList = [];
  categoriesList = [];
  filtersList = [];
  mainActiveTab = '';
  secondActiveTab = '';

  constructor(private filtersService: FiltersService) { }

  ngOnInit() {
    this.tabsList = this.filtersService.getTabsList();
    this.categoriesList = this.filtersService.getCategoriesList();
    this.filtersList = this.filtersService.getFiltersList();
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

}
