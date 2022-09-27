import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconClosevsgoalComponent } from './falcon-closevsgoal.component';

describe('FalconClosevsgoalComponent', () => {
  let component: FalconClosevsgoalComponent;
  let fixture: ComponentFixture<FalconClosevsgoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconClosevsgoalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconClosevsgoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
