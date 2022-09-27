import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconDashboardMostLeadsComponent } from './falcon-dashboard-most-leads.component';

describe('FalconDashboardMostLeadsComponent', () => {
  let component: FalconDashboardMostLeadsComponent;
  let fixture: ComponentFixture<FalconDashboardMostLeadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconDashboardMostLeadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconDashboardMostLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
