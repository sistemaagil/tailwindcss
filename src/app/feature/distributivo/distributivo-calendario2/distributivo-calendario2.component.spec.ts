import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributivoCalendario2Component } from './distributivo-calendario2.component';

describe('DistributivoCalendario2Component', () => {
  let component: DistributivoCalendario2Component;
  let fixture: ComponentFixture<DistributivoCalendario2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistributivoCalendario2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistributivoCalendario2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
