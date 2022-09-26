import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconDashboardManagementWELCOMETOFALCONComponent } from './falcon-dashboard-management-welcome-tofalcon.component';

describe('FalconDashboardManagementWELCOMETOFALCONComponent', () => {
  let component: FalconDashboardManagementWELCOMETOFALCONComponent;
  let fixture: ComponentFixture<FalconDashboardManagementWELCOMETOFALCONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconDashboardManagementWELCOMETOFALCONComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconDashboardManagementWELCOMETOFALCONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
