import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconDashboardTrafficSourceComponent } from './falcon-dashboard-traffic-source.component';

describe('FalconDashboardTrafficSourceComponent', () => {
  let component: FalconDashboardTrafficSourceComponent;
  let fixture: ComponentFixture<FalconDashboardTrafficSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconDashboardTrafficSourceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconDashboardTrafficSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
