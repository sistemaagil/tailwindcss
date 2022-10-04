import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaasConversionComponent } from './saas-conversion.component';

describe('SaasConversionComponent', () => {
  let component: SaasConversionComponent;
  let fixture: ComponentFixture<SaasConversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaasConversionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaasConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
