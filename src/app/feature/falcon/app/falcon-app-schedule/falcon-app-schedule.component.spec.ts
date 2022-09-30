import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconAppScheduleComponent } from './falcon-app-schedule.component';

describe('FalconAppScheduleComponent', () => {
  let component: FalconAppScheduleComponent;
  let fixture: ComponentFixture<FalconAppScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconAppScheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconAppScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
