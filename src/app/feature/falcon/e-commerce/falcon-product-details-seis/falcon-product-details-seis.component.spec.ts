import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconProductDetailsSeisComponent } from './falcon-product-details-seis.component';

describe('FalconProductDetailsSeisComponent', () => {
  let component: FalconProductDetailsSeisComponent;
  let fixture: ComponentFixture<FalconProductDetailsSeisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconProductDetailsSeisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconProductDetailsSeisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
