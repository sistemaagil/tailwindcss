import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconDashboardSaasMOREWITHFALCONComponent } from './falcon-dashboard-saas-morewith-falcon.component';

describe('FalconDashboardSaasMOREWITHFALCONComponent', () => {
  let component: FalconDashboardSaasMOREWITHFALCONComponent;
  let fixture: ComponentFixture<FalconDashboardSaasMOREWITHFALCONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconDashboardSaasMOREWITHFALCONComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconDashboardSaasMOREWITHFALCONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
