import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewYearEveComponent } from './new-year-eve.component';

describe('NewYearEveComponent', () => {
  let component: NewYearEveComponent;
  let fixture: ComponentFixture<NewYearEveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewYearEveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewYearEveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
