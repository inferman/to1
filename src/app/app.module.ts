import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './common-components/header-component/header.component';
import {FooterComponent} from './common-components/footer-component/footer.component';
import {CustomerActionsMenuComponent} from './common-components/customer-actions-menu/customer-actions-menu.component';
import {MainMenuComponent} from './common-components/main-menu/main-menu.component';
import {MenuService} from './services/menu-service.service';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardModule' },
  { path: 'licences', loadChildren: './pages/licences/licences.module#LicencesModule' },

];

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CustomerActionsMenuComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    MenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
