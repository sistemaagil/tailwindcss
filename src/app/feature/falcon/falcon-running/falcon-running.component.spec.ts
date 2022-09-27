import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconRunningComponent } from './falcon-running.component';

describe('FalconRunningComponent', () => {
  let component: FalconRunningComponent;
  let fixture: ComponentFixture<FalconRunningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconRunningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconRunningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
