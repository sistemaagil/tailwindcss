import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconDashboardDefaultWeklySalesComponent } from './falcon-dashboard-default-wekly-sales.component';

describe('FalconDashboardDefaultWeklySalesComponent', () => {
  let component: FalconDashboardDefaultWeklySalesComponent;
  let fixture: ComponentFixture<FalconDashboardDefaultWeklySalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconDashboardDefaultWeklySalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconDashboardDefaultWeklySalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
