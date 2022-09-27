import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconAnalyticsCompletedComponent } from './falcon-analytics-completed.component';


describe('FalconAnalyticsCompletedComponent', () => {
  let component: FalconAnalyticsCompletedComponent;
  let fixture: ComponentFixture<FalconAnalyticsCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconAnalyticsCompletedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconAnalyticsCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
