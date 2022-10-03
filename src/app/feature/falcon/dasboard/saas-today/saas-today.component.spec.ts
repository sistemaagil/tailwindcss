import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaasTodayComponent } from './saas-today.component';

describe('SaasTodayComponent', () => {
  let component: SaasTodayComponent;
  let fixture: ComponentFixture<SaasTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaasTodayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaasTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
