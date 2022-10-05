import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconProductDetailsTresComponent } from './falcon-product-details-tres.component';

describe('FalconProductDetailsTresComponent', () => {
  let component: FalconProductDetailsTresComponent;
  let fixture: ComponentFixture<FalconProductDetailsTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconProductDetailsTresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconProductDetailsTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
