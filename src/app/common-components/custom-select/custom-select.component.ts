import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent implements OnInit {

  isActive = true;
  isMultipleSelect = false;
  constructor() { }

  ngOnInit() {
  }

  toggleListItems() {
    this.isActive = !this.isActive;
  }

}
