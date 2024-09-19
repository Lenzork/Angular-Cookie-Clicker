import { Component } from '@angular/core';
import { CookieService } from './cookie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CookieService]
})
export class AppComponent {
  title = 'Angular-Cookie-Clicker';

  constructor(private cookieService: CookieService) {}

  onCookieClick() {
    this.cookieService.addCookie(1);
  }
}
