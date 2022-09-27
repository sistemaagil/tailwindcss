import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconECommerceProductGirdProductDetailsComponent } from './falcon-e-commerce-product-gird-product-details.component';

describe('FalconECommerceProductGirdProductDetailsComponent', () => {
  let component: FalconECommerceProductGirdProductDetailsComponent;
  let fixture: ComponentFixture<FalconECommerceProductGirdProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconECommerceProductGirdProductDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconECommerceProductGirdProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
