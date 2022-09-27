import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECommerceSalesByPosLocationComponent } from './e-commerce-sales-by-pos-location.component';

describe('ECommerceSalesByPosLocationComponent', () => {
  let component: ECommerceSalesByPosLocationComponent;
  let fixture: ComponentFixture<ECommerceSalesByPosLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ECommerceSalesByPosLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ECommerceSalesByPosLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
