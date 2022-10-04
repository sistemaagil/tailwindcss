import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconDashboardAppEComerceProductGridYProductDetailsComponent } from './falcon-dashboard-app-e-comerce-product-grid-y-product-details.component';

describe('FalconDashboardAppEComerceProductGridYProductDetailsComponent', () => {
  let component: FalconDashboardAppEComerceProductGridYProductDetailsComponent;
  let fixture: ComponentFixture<FalconDashboardAppEComerceProductGridYProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconDashboardAppEComerceProductGridYProductDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconDashboardAppEComerceProductGridYProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
