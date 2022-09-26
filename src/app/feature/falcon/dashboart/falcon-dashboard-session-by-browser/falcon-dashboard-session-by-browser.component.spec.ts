import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconDashboardSessionByBrowserComponent } from './falcon-dashboard-session-by-browser.component';

describe('FalconDashboardSessionByBrowserComponent', () => {
  let component: FalconDashboardSessionByBrowserComponent;
  let fixture: ComponentFixture<FalconDashboardSessionByBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconDashboardSessionByBrowserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconDashboardSessionByBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
