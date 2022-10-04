import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconECommerceProductDetailsDosComponent } from './falcon-e-commerce-product-details-dos.component';

describe('FalconECommerceProductDetailsDosComponent', () => {
  let component: FalconECommerceProductDetailsDosComponent;
  let fixture: ComponentFixture<FalconECommerceProductDetailsDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconECommerceProductDetailsDosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconECommerceProductDetailsDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
