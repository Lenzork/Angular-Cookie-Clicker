import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CookieService {
  private cookiesCount = new BehaviorSubject<number>(0);
  private grandmaCount = new BehaviorSubject<number>(0);

  cookies = this.cookiesCount.asObservable();
  bonusCookiesPerClick = 0;
  grandmas = this.grandmaCount.asObservable();

  intervalTime = 1000;

  interval = setInterval(() => {
      this.addCookie(this.grandmaCount.value * 2);
    }, this.intervalTime);

  constructor() {
    this.interval;
  }

  addCookie(value: number) {
    this.cookiesCount.next(this.cookiesCount.value + (value + this.bonusCookiesPerClick));
  }

  addGrandmaWorker(value: number) {
    this.grandmaCount.next(this.grandmaCount.value + value);
  }

  addBonusCookiesPerClick(value: number){
    this.bonusCookiesPerClick += value;
  }

  reduceInterval(value: number) {
    this.intervalTime -= value;
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.addCookie(this.grandmaCount.value * 2);
    }, this.intervalTime);
  }

  getCookies() {
    return this.cookies;
  }

  getGrandmas() {
    return this.grandmas;
  }

  getCookiesCount() {
    return this.cookiesCount.value;
  }
  
  getGrandmasCount() {
    return this.grandmaCount.value;
  }
}
