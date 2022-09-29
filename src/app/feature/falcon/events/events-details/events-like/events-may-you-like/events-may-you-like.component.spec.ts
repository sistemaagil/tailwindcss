import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsMayYouLikeComponent } from './events-may-you-like.component';

describe('EventsMayYouLikeComponent', () => {
  let component: EventsMayYouLikeComponent;
  let fixture: ComponentFixture<EventsMayYouLikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsMayYouLikeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsMayYouLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
