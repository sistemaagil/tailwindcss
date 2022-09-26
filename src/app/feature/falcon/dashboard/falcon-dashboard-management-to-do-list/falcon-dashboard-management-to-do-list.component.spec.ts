import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconDashboardManagementTODOLISTComponent } from './falcon-dashboard-management-to-do-list.component';

describe('FalconDashboardManagementTODOLISTComponent', () => {
  let component: FalconDashboardManagementTODOLISTComponent;
  let fixture: ComponentFixture<FalconDashboardManagementTODOLISTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconDashboardManagementTODOLISTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconDashboardManagementTODOLISTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
