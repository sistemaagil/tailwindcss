import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconProductDetailsCINCOCINCOComponent } from './falcon-product-details-cinco-cinco.component';

describe('FalconProductDetailsCINCOCINCOComponent', () => {
  let component: FalconProductDetailsCINCOCINCOComponent;
  let fixture: ComponentFixture<FalconProductDetailsCINCOCINCOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconProductDetailsCINCOCINCOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconProductDetailsCINCOCINCOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
