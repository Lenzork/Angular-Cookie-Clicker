import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerCookieDisplayComponent } from './player-cookie-display.component';

describe('PlayerCookieDisplayComponent', () => {
  let component: PlayerCookieDisplayComponent;
  let fixture: ComponentFixture<PlayerCookieDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerCookieDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerCookieDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
