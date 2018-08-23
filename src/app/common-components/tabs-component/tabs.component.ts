import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TabProps} from '../../interfaces/tab-props';

@Component({
  selector: 'tabs-component',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})

export class TabsComponent implements OnInit {
  @Input() tabsHeadData: any[];
  @Output() tabSwitched = new EventEmitter<TabProps>();
  constructor() {}

  ngOnInit() {
  }

  onSelectTab(activeTab: TabProps) {
    this.tabSwitched.emit(activeTab);
  }

}
