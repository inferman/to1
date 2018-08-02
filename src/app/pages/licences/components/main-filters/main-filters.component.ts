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
  dinamicFiltersList = [];
  staticFiltersList = [];
  mainActiveTab = '';
  secondActiveTab = '';

  constructor(private filtersService: FiltersService) { }

  ngOnInit() {
    this.tabsList = this.filtersService.getData('tabsList');
    this.categoriesList = this.filtersService.getData('categoriesList');
    this.dinamicFiltersList = this.filtersService.getData('dinamicFiltersList');
    this.staticFiltersList = this.filtersService.getData('staticFiltersList');
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
