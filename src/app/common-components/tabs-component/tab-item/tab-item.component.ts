import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.scss'],
})

export class TabItemComponent implements OnInit {
  @Input() tabItem: {title: string, type: string};
  constructor() {}

  ngOnInit() {}
}
