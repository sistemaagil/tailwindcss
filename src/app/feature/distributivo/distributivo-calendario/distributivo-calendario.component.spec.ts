import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributivoCalendarioComponent } from './distributivo-calendario.component';

describe('DistributivoCalendarioComponent', () => {
  let component: DistributivoCalendarioComponent;
  let fixture: ComponentFixture<DistributivoCalendarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistributivoCalendarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistributivoCalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
