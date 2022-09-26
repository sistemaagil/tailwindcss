import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconDashboardBandwidthComponent } from './falcon-dashboard-bandwidth.component';

describe('FalconDashboardBandwidthComponent', () => {
  let component: FalconDashboardBandwidthComponent;
  let fixture: ComponentFixture<FalconDashboardBandwidthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconDashboardBandwidthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconDashboardBandwidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
