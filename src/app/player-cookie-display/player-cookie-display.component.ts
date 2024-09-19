import { Component, OnInit } from '@angular/core';
import { CookieService } from '../cookie.service';

@Component({
  selector: 'app-player-cookie-display',
  templateUrl: './player-cookie-display.component.html',
  styleUrls: ['./player-cookie-display.component.scss']
})
export class PlayerCookieDisplayComponent implements OnInit {
  cookieCount: number;
  

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    this.cookieService.getCookies().subscribe((count) => {
      this.cookieCount = count;
    });
  }
}
