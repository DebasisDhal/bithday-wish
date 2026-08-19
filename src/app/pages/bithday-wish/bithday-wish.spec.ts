import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BithdayWish } from './bithday-wish';

describe('BithdayWish', () => {
  let component: BithdayWish;
  let fixture: ComponentFixture<BithdayWish>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BithdayWish]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BithdayWish);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
