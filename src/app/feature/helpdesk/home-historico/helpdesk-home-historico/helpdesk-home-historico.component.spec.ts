import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpdeskHomeHistoricoComponent } from './helpdesk-home-historico.component';

describe('HelpdeskHomeHistoricoComponent', () => {
  let component: HelpdeskHomeHistoricoComponent;
  let fixture: ComponentFixture<HelpdeskHomeHistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpdeskHomeHistoricoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpdeskHomeHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
