import {Component, ElementRef, OnInit} from '@angular/core';
import {DefaultPriceService} from './products-defaults.service';

@Component({
  selector: 'products-price-settings',
  templateUrl: './products-defaults.component.html',
  styleUrls: ['./products-defaults.component.scss'],
  providers: [DefaultPriceService]
})

export class DefaultPriceSettingsComponent implements OnInit {
  taxesList: {id: number, text: string}[];

  constructor(private defaultPriceService: DefaultPriceService) {}

  ngOnInit() {
    this.taxesList = this.defaultPriceService.getTaxesList();
  }

  onTableSelect(tableItem: number) {
    console.log(tableItem);
  }

  onPriceSwitch(event: any ) {
    console.log(event.currentTarget.checked);
  }
}
