import { Component, OnInit } from '@angular/core';
import { CookieService } from '../cookie.service';

@Component({
  selector: 'app-cookie-shop',
  templateUrl: './cookie-shop.component.html',
  styleUrls: ['./cookie-shop.component.scss']
})
export class CookieShopComponent implements OnInit {

  shopItems = [
    {
      name: 'More Click Power',
      price: 50,
      description: 'gives your clicks more power!'
    },
    {
      name: 'Granny Worker',
      price: 75,
      description: 'Gives your a Grandma!'
    },
    {
      name: 'Effective Workers',
      price: (this.CookieService.getGrandmasCount() + 1) * 1000 + 85,
      description: 'Decreases the work interval'
    }
  ];

  constructor(private CookieService: CookieService) { }

  ngOnInit(): void {
  }

  buyShopItem(name: any, price: number): void {
    // Simple Function to purchase a shop item
    switch(name)
    {
      case 'More Click Power':
        // Check the Price
        if(this.CookieService.getCookiesCount() < price)
          return;

        // Remove the price from the players account
        this.processShopBuy(price);

        // Update the price of the shop item
        this.increaseShopPrice(name);

        // Give the function of the item
        this.CookieService.addBonusCookiesPerClick(1);
      break;
      case 'Granny Worker':
        // Check the Price
        if(this.CookieService.getCookiesCount() < price)
        return;

        // Remove the price from the players account
        this.processShopBuy(price);

        // Update the price of the shop item
        this.increaseShopPrice(name);

        // Update Worker Price
        this.updateEffectiveWorkersPrice();

        // Give the function of the item
        this.CookieService.addGrandmaWorker(1);
      break;
      case 'Effective Workers':
        // Check the Price
        if(this.CookieService.getCookiesCount() < price)
        return;

        // Remove the price from the players account
        this.processShopBuy(price);

        // Update the price of the shop item
        this.increaseShopPrice(name);

        // Give the function of the item
        this.CookieService.reduceInterval(225);
      break;
      default:
        console.error('Invalid value, could not buy item: ' + name);
      break;
    }
  }

  processShopBuy(price: number): void {
    // Reduce Cookies with the price
    this.CookieService.addCookie(-price);
  }

  increaseShopPrice(name: any): void {
    var result = this.shopItems.find(item => {
      return item.name === name;
    })
    result.price *= 2;
  }

  updateEffectiveWorkersPrice(): void {
    var result = this.shopItems.find(item => {
      return item.name === "Effective Workers";
    })
    result.price = (this.CookieService.getGrandmasCount() + 1) * 1000 + 85;
    }
  }
