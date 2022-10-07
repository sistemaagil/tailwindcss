import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconProductDetailsOchoComponent } from './falcon-product-details-ocho.component';

describe('FalconProductDetailsOchoComponent', () => {
  let component: FalconProductDetailsOchoComponent;
  let fixture: ComponentFixture<FalconProductDetailsOchoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconProductDetailsOchoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconProductDetailsOchoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
