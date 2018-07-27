import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';

// containers
import {LayoutComponent} from './layout.component';
import {HeaderComponent} from '../common-components/header-component/header.component';
import {FooterComponent} from '../common-components/footer-component/footer.component';
import {CustomerActionsMenuComponent} from '../common-components/customer-actions-menu/customer-actions-menu.component';
import {MainMenuComponent} from '../common-components/main-menu/main-menu.component';

// routes
export const ROUTES: Routes = [
  { path: '', component: LayoutComponent }
];

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    CustomerActionsMenuComponent,
    MainMenuComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  bootstrap: [LayoutComponent]
})
export class LayoutModule {}
