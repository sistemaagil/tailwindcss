import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconTotalsalesComponent } from './falcon-totalsales.component';

describe('FalconTotalsalesComponent', () => {
  let component: FalconTotalsalesComponent;
  let fixture: ComponentFixture<FalconTotalsalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconTotalsalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconTotalsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
