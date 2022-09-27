import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconDashboardToDoListComponent } from './falcon-dashboard-to-do-list.component';

describe('FalconDashboardToDoListComponent', () => {
  let component: FalconDashboardToDoListComponent;
  let fixture: ComponentFixture<FalconDashboardToDoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconDashboardToDoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconDashboardToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
