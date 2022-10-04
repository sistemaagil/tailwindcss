import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconDashboardSaasSHAREDFILESComponent } from './falcon-dashboard-saas-shared-files.component';

describe('FalconDashboardSaasSHAREDFILESComponent', () => {
  let component: FalconDashboardSaasSHAREDFILESComponent;
  let fixture: ComponentFixture<FalconDashboardSaasSHAREDFILESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconDashboardSaasSHAREDFILESComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconDashboardSaasSHAREDFILESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
