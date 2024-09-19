import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClickableCookieComponent } from './clickable-cookie/clickable-cookie.component';
import { PlayerCookieDisplayComponent } from './player-cookie-display/player-cookie-display.component';
import { CookieShopComponent } from './cookie-shop/cookie-shop.component';
import { EmployeesComponent } from './employees/employees.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickableCookieComponent,
    PlayerCookieDisplayComponent,
    CookieShopComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
