import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent implements OnInit {
  @Input() config: {};
  isActive = true;
  isMultipleSelect = false;
  constructor() { }

  ngOnInit() {
    console.log(this.config);
  }

  toggleListItems() {
    this.isActive = !this.isActive;
  }

}
