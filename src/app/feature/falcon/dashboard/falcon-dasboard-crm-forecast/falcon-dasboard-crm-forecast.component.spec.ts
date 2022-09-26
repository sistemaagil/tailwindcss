import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconDasboardCrmForecastComponent } from './falcon-dasboard-crm-forecast.component';

describe('FalconDasboardCrmForecastComponent', () => {
  let component: FalconDasboardCrmForecastComponent;
  let fixture: ComponentFixture<FalconDasboardCrmForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconDasboardCrmForecastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconDasboardCrmForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
