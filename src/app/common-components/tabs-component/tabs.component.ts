import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tabs-component',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})

export class TabsComponent implements OnInit {
  @Input() tabsHeadData: any[];
  constructor() {}

  ngOnInit() {
  }
}
