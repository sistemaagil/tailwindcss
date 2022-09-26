import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeriaFiltroComponent } from './mensajeria-filtro.component';

describe('MensajeriaFiltroComponent', () => {
  let component: MensajeriaFiltroComponent;
  let fixture: ComponentFixture<MensajeriaFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensajeriaFiltroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensajeriaFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
