import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconDashboardSaasTRANSACTIONSUMMARYComponent } from './falcon-dashboard-saas-transaction-summary.component';

describe('FalconDashboardSaasTRANSACTIONSUMMARYComponent', () => {
  let component: FalconDashboardSaasTRANSACTIONSUMMARYComponent;
  let fixture: ComponentFixture<FalconDashboardSaasTRANSACTIONSUMMARYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconDashboardSaasTRANSACTIONSUMMARYComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconDashboardSaasTRANSACTIONSUMMARYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
