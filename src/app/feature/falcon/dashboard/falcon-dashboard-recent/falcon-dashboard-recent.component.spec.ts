import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconDashboardRecentComponent } from './falcon-dashboard-recent.component';

describe('FalconDashboardRecentComponent', () => {
  let component: FalconDashboardRecentComponent;
  let fixture: ComponentFixture<FalconDashboardRecentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconDashboardRecentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconDashboardRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
