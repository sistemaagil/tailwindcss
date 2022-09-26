import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Me02Component } from './me02.component';

describe('Me02Component', () => {
  let component: Me02Component;
  let fixture: ComponentFixture<Me02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Me02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Me02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
