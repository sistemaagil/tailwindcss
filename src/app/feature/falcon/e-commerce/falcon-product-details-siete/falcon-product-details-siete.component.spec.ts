import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconProductDetailsSieteComponent } from './falcon-product-details-siete.component';

describe('FalconProductDetailsSieteComponent', () => {
  let component: FalconProductDetailsSieteComponent;
  let fixture: ComponentFixture<FalconProductDetailsSieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconProductDetailsSieteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconProductDetailsSieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
