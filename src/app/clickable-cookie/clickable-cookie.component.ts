import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clickable-cookie',
  templateUrl: './clickable-cookie.component.html',
  styleUrls: ['./clickable-cookie.component.scss']
})
export class ClickableCookieComponent implements OnInit {
  @Output() cookieClick = new EventEmitter<void>();

  img = "https://pngimg.com/d/cookie_PNG13680.png";
  style = "height: 300px; width: 300px;"

  ngOnInit(): void {
  }

  onClick() {
    this.cookieClick.emit();
    console.log("Works!");
  }

}
