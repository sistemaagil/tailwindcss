import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaasCustomersComponent } from './saas-customers.component';

describe('SaasCustomersComponent', () => {
  let component: SaasCustomersComponent;
  let fixture: ComponentFixture<SaasCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaasCustomersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaasCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
