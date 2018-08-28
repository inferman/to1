import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DpDatePickerModule } from 'ng2-date-picker';

// containers
import { LicencesComponent } from './licences.component';
import { MainFiltersComponent } from './components/main-filters/main-filters.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { CustomSelectComponent } from '../../common-components/custom-select/custom-select.component';
import { SimpleSelectorComponent } from '../../common-components/simple-select/simple-select.component';
import { TabsComponent } from '../../common-components/tabs-component/tabs.component';
import { TabsHeaderComponent } from '../../common-components/tabs-component/tabs-header/tabs-header.component';
import { TabItemComponent } from '../../common-components/tabs-component/tab-item/tab-item.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { ProductDiscountsComponent } from './components/discounts/product-discounts.component';
import { ProductCustomersComponent } from './components/product-customers/product-customers.component';
import {DefaultPriceSettingsComponent} from './components/products-defaults/products-defaults.component';

// routes
export const ROUTES: Routes = [
  { path: '', component: LicencesComponent }
];

@NgModule({
  declarations: [
    LicencesComponent,
    MainFiltersComponent,
    ProductsListComponent,
    CustomSelectComponent,
    SimpleSelectorComponent,
    TabsComponent,
    TabsHeaderComponent,
    TabItemComponent,
    ProductUpdateComponent,
    ProductDiscountsComponent,
    ProductCustomersComponent,
    DefaultPriceSettingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DpDatePickerModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class LicencesModule {}
