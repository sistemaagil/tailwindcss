import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeEntranteComponent } from './mensaje-entrante.component';

describe('MensajeEntranteComponent', () => {
  let component: MensajeEntranteComponent;
  let fixture: ComponentFixture<MensajeEntranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensajeEntranteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensajeEntranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
