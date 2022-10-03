import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FREENewYearsComponent } from './free-new-years.component';

describe('FREENewYearsComponent', () => {
  let component: FREENewYearsComponent;
  let fixture: ComponentFixture<FREENewYearsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FREENewYearsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FREENewYearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
