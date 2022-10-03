import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaasRevenueComponent } from './saas-revenue.component';

describe('SaasRevenueComponent', () => {
  let component: SaasRevenueComponent;
  let fixture: ComponentFixture<SaasRevenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaasRevenueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaasRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
