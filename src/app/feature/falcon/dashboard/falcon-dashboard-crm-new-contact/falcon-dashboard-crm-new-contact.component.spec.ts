import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconDashboardCRMNewContactComponent } from './falcon-dashboard-crm-new-contact.component';

describe('FalconDashboardCRMNewContactComponent', () => {
  let component: FalconDashboardCRMNewContactComponent;
  let fixture: ComponentFixture<FalconDashboardCRMNewContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconDashboardCRMNewContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconDashboardCRMNewContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
