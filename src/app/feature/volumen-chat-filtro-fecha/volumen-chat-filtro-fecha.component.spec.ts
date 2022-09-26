import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumenChatFiltroFechaComponent } from './volumen-chat-filtro-fecha.component';

describe('VolumenChatFiltroFechaComponent', () => {
  let component: VolumenChatFiltroFechaComponent;
  let fixture: ComponentFixture<VolumenChatFiltroFechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolumenChatFiltroFechaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolumenChatFiltroFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
