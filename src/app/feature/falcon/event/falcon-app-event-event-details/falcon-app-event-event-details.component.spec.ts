import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconAppEventEventDetailsComponent } from './falcon-app-event-event-details.component';

describe('FalconAppEventEventDetailsComponent', () => {
  let component: FalconAppEventEventDetailsComponent;
  let fixture: ComponentFixture<FalconAppEventEventDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconAppEventEventDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconAppEventEventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
