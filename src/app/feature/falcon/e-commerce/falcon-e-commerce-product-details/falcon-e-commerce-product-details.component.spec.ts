import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconECommerceProductDetailsComponent } from './falcon-e-commerce-product-details.component';

describe('FalconECommerceProductDetailsComponent', () => {
  let component: FalconECommerceProductDetailsComponent;
  let fixture: ComponentFixture<FalconECommerceProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconECommerceProductDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconECommerceProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
