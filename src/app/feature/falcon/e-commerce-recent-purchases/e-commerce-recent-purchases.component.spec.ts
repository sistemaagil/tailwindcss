import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECommerceRecentPurchasesComponent } from './e-commerce-recent-purchases.component';

describe('ECommerceRecentPurchasesComponent', () => {
  let component: ECommerceRecentPurchasesComponent;
  let fixture: ComponentFixture<ECommerceRecentPurchasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ECommerceRecentPurchasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ECommerceRecentPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
