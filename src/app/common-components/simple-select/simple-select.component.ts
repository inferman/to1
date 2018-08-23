import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'simple-select',
  templateUrl: './simple-select.component.html',
  styleUrls: ['./simple-select.component.scss']
})
export class SimpleSelectorComponent implements OnInit {
  @Input() selectList;
  @Input() selectedItem: {id: number, text: string};
  @Output() itemSelected = new EventEmitter<{id: number, text: string}>();

  isActive = false;

  constructor() { }

  ngOnInit() {
  }

  toggleListItems() {
    this.isActive = !this.isActive;
  }

  onItemSelect(item: {id: number, text: string}) {
    this.selectedItem = item;
    this.itemSelected.emit(item);
    this.isActive = false;
  }

}
