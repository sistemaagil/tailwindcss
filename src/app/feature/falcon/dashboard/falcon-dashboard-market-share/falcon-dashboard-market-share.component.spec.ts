import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconDashboardMarketShareComponent } from './falcon-dashboard-market-share.component';

describe('FalconDashboardMarketShareComponent', () => {
  let component: FalconDashboardMarketShareComponent;
  let fixture: ComponentFixture<FalconDashboardMarketShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconDashboardMarketShareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconDashboardMarketShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
