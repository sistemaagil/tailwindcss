import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconProductDetailsCincoComponent } from './falcon-product-details-cinco.component';

describe('FalconProductDetailsCincoComponent', () => {
  let component: FalconProductDetailsCincoComponent;
  let fixture: ComponentFixture<FalconProductDetailsCincoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconProductDetailsCincoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconProductDetailsCincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
