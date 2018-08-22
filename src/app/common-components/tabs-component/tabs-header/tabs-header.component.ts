import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tabs-header',
  templateUrl: './tabs-header.component.html',
  styleUrls: ['./tabs-header.component.scss'],
})

export class  TabsHeaderComponent implements OnInit {
  @Input() tabsList: any[];
  constructor() {}

  ngOnInit() { }
}
