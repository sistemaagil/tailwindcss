import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconProductDetailsCuatroComponent } from './falcon-product-details-cuatro.component';

describe('FalconProductDetailsCuatroComponent', () => {
  let component: FalconProductDetailsCuatroComponent;
  let fixture: ComponentFixture<FalconProductDetailsCuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconProductDetailsCuatroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconProductDetailsCuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
