import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconProductDetailsNueveComponent } from './falcon-product-details-nueve.component';

describe('FalconProductDetailsNueveComponent', () => {
  let component: FalconProductDetailsNueveComponent;
  let fixture: ComponentFixture<FalconProductDetailsNueveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconProductDetailsNueveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconProductDetailsNueveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
