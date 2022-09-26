import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconDashboardAnalyticsConnectComponent } from './falcon-dashboard-analytics-connect.component';

describe('FalconDashboardAnalyticsConnectComponent', () => {
  let component: FalconDashboardAnalyticsConnectComponent;
  let fixture: ComponentFixture<FalconDashboardAnalyticsConnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconDashboardAnalyticsConnectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconDashboardAnalyticsConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
