import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconECommerceProductGridDetaisComponent } from './falcon-e-commerce-product-grid-detais.component';

describe('FalconECommerceProductGridDetaisComponent', () => {
  let component: FalconECommerceProductGridDetaisComponent;
  let fixture: ComponentFixture<FalconECommerceProductGridDetaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconECommerceProductGridDetaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconECommerceProductGridDetaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
