import { Component, OnInit } from '@angular/core';
import { CookieService } from '../cookie.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees = this.generateItems(5);
  employeePicture = "https://www.pngall.com/wp-content/uploads/12/Grandma-Happy-PNG-HD-Image.png";

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    this.employees = this.generateItems(this.cookieService.getGrandmasCount());
    this.cookieService.getGrandmas().subscribe((value) => {
      this.employees = this.generateItems(value);
    })
  }

  generateItems(count: number): any[] {
    return Array(count).fill({}); // Erzeugt ein Array von leeren Objekten
  }
  
}
