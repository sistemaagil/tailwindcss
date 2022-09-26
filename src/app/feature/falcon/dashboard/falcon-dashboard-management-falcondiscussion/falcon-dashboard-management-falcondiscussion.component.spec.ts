import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconDashboardManagementFalcondiscussionComponent } from './falcon-dashboard-management-falcondiscussion.component';

describe('FalconDashboardManagementFalcondiscussionComponent', () => {
  let component: FalconDashboardManagementFalcondiscussionComponent;
  let fixture: ComponentFixture<FalconDashboardManagementFalcondiscussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconDashboardManagementFalcondiscussionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconDashboardManagementFalcondiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
