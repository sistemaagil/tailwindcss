import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconAppEventOtherInfoComponent } from './falcon-app-event-other-info.component';

describe('FalconAppEventOtherInfoComponent', () => {
  let component: FalconAppEventOtherInfoComponent;
  let fixture: ComponentFixture<FalconAppEventOtherInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconAppEventOtherInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconAppEventOtherInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
