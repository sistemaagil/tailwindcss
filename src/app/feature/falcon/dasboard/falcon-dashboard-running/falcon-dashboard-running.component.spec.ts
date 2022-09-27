import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconDashboardRunningComponent } from './falcon-dashboard-running.component';

describe('FalconDashboardRunningComponent', () => {
  let component: FalconDashboardRunningComponent;
  let fixture: ComponentFixture<FalconDashboardRunningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconDashboardRunningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconDashboardRunningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
