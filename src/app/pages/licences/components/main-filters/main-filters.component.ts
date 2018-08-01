import { Component, OnInit } from '@angular/core';

import {FiltersService} from '../../services/filters.service';

@Component({
  selector: 'main-filters',
  templateUrl: './main-filters.component.html',
  styleUrls: ['./main-filters.component.scss'],
  providers: [FiltersService]
})
export class MainFiltersComponent implements OnInit {

  mainFiltersList = [];
  secondFiltersList = [];
  mainActiveTab = '';
  secondActiveTab = '';

  constructor(private filtersService: FiltersService) { }

  ngOnInit() {
    this.mainFiltersList = this.filtersService.getFiltersList();
    this.secondFiltersList = this.filtersService.getSecondFiltersList();
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
