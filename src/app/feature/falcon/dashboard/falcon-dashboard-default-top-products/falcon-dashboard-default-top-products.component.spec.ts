import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconDashboardDefaultTOPPRODUCTSComponent } from './falcon-dashboard-default-top-products.component';

describe('FalconDashboardDefaultTOPPRODUCTSComponent', () => {
  let component: FalconDashboardDefaultTOPPRODUCTSComponent;
  let fixture: ComponentFixture<FalconDashboardDefaultTOPPRODUCTSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconDashboardDefaultTOPPRODUCTSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconDashboardDefaultTOPPRODUCTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
