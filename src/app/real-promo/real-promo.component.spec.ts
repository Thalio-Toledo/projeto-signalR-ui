import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealPromoComponent } from './real-promo.component';

describe('RealPromoComponent', () => {
  let component: RealPromoComponent;
  let fixture: ComponentFixture<RealPromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RealPromoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
