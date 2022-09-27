import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconDashboardCampaignsComponent } from './falcon-dashboard-campaigns.component';

describe('FalconDashboardCampaignsComponent', () => {
  let component: FalconDashboardCampaignsComponent;
  let fixture: ComponentFixture<FalconDashboardCampaignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconDashboardCampaignsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconDashboardCampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
