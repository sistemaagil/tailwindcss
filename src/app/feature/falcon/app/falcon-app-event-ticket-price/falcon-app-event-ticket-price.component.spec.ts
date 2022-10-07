import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconAppEventTicketPriceComponent } from './falcon-app-event-ticket-price.component';

describe('FalconAppEventTicketPriceComponent', () => {
  let component: FalconAppEventTicketPriceComponent;
  let fixture: ComponentFixture<FalconAppEventTicketPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconAppEventTicketPriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconAppEventTicketPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
