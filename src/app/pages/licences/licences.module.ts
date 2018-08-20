import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// containers
import {LicencesComponent} from './licences.component';
import {MainFiltersComponent} from './components/main-filters/main-filters.component';
import {ProductsListComponent} from './components/products-list/products-list.component';
import {CustomSelectComponent} from '../../common-components/custom-select/custom-select.component';
import {SimpleSelectorComponent} from '../../common-components/simple-select/simple-select.component';

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
    SimpleSelectorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class LicencesModule {}
