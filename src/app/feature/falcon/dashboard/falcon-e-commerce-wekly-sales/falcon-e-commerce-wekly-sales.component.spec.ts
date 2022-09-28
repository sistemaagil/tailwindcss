import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconECommerceWeklySalesComponent } from './falcon-e-commerce-wekly-sales.component';

describe('FalconECommerceWeklySalesComponent', () => {
  let component: FalconECommerceWeklySalesComponent;
  let fixture: ComponentFixture<FalconECommerceWeklySalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconECommerceWeklySalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconECommerceWeklySalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
