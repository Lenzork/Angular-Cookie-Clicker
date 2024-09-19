import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickableCookieComponent } from './clickable-cookie.component';

describe('ClickableCookieComponent', () => {
  let component: ClickableCookieComponent;
  let fixture: ComponentFixture<ClickableCookieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickableCookieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClickableCookieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
