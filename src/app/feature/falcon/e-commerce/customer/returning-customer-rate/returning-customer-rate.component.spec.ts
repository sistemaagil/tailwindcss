import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturningCustomerRateComponent } from './returning-customer-rate.component';

describe('ReturningCustomerRateComponent', () => {
  let component: ReturningCustomerRateComponent;
  let fixture: ComponentFixture<ReturningCustomerRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturningCustomerRateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturningCustomerRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
