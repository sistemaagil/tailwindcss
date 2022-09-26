import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributivoCursosComponent } from './distributivo-cursos.component';

describe('DistributivoCursosComponent', () => {
  let component: DistributivoCursosComponent;
  let fixture: ComponentFixture<DistributivoCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistributivoCursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistributivoCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
