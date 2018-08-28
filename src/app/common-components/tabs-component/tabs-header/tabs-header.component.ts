import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TabProps} from '../../../interfaces/tab-props';

@Component({
  selector: 'tabs-header',
  templateUrl: './tabs-header.component.html',
  styleUrls: ['./tabs-header.component.scss'],
})

export class  TabsHeaderComponent implements OnInit {
  @Input() tabsList: any[];
  @Output() tabSelected = new EventEmitter<TabProps>();

  activeTab: string;

  constructor() {}

  onClickTab(tab: TabProps) {
    if (tab.type === this.activeTab) return false;

    this.tabSelected.emit({ title: tab.title, type: tab.type });
    this.activeTab = tab.type;
  }

  ngOnInit() {
    this.activeTab = this.tabsList[3].type;
  }
}
