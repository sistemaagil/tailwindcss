import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconManagementOrdersComponent } from './falcon-management-orders.component';

describe('FalconManagementOrdersComponent', () => {
  let component: FalconManagementOrdersComponent;
  let fixture: ComponentFixture<FalconManagementOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconManagementOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconManagementOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
