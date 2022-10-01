import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconAppEventCreateEventComponent } from './falcon-app-event-create-event.component';

describe('FalconAppEventCreateEventComponent', () => {
  let component: FalconAppEventCreateEventComponent;
  let fixture: ComponentFixture<FalconAppEventCreateEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconAppEventCreateEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconAppEventCreateEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
