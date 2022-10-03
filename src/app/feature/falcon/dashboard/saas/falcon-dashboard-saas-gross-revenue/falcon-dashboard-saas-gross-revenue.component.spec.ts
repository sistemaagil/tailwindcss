import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconDashboardSaasGrossRevenueComponent } from './falcon-dashboard-saas-gross-revenue.component';

describe('FalconDashboardSaasGrossRevenueComponent', () => {
  let component: FalconDashboardSaasGrossRevenueComponent;
  let fixture: ComponentFixture<FalconDashboardSaasGrossRevenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconDashboardSaasGrossRevenueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconDashboardSaasGrossRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
