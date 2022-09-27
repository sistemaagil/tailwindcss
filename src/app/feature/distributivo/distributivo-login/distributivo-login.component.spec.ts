import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributivoLoginComponent } from './distributivo-login.component';

describe('DistributivoLoginComponent', () => {
  let component: DistributivoLoginComponent;
  let fixture: ComponentFixture<DistributivoLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistributivoLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistributivoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
