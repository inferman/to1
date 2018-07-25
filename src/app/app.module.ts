import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { SidebarComponentComponent } from './sidebar-component/sidebar-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { LoginComponent } from './login/login.component';
import { MainComponentComponent } from './main/main-component/main-component.component';
import { MainMenuComponent } from './header-component/main-menu/main-menu.component';
import { CustomerActionsMenuComponent } from './header-component/customer-actions-menu/customer-actions-menu.component';

export const ROUTES: Routes = [
  { path: '', component: TestComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SidebarComponentComponent,
    HeaderComponentComponent,
    LoginComponent,
    MainComponentComponent,
    MainMenuComponent,
    CustomerActionsMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
