import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconDashboardSaasBANDWIDTHSAVEDComponent } from './falcon-dashboard-saas-bandwidth-saved.component';

describe('FalconDashboardSaasBANDWIDTHSAVEDComponent', () => {
  let component: FalconDashboardSaasBANDWIDTHSAVEDComponent;
  let fixture: ComponentFixture<FalconDashboardSaasBANDWIDTHSAVEDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconDashboardSaasBANDWIDTHSAVEDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconDashboardSaasBANDWIDTHSAVEDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
