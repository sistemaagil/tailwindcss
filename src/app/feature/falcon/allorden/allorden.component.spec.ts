import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllordenComponent } from './allorden.component';

describe('AllordenComponent', () => {
  let component: AllordenComponent;
  let fixture: ComponentFixture<AllordenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllordenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllordenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
