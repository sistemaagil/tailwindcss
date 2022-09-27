import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageCallDurationComponent } from './average-call-duration.component';

describe('AverageCallDurationComponent', () => {
  let component: AverageCallDurationComponent;
  let fixture: ComponentFixture<AverageCallDurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AverageCallDurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AverageCallDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
