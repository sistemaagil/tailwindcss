import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpdeskWidgetComponent } from './helpdesk-widget.component';

describe('HelpdeskWidgetComponent', () => {
  let component: HelpdeskWidgetComponent;
  let fixture: ComponentFixture<HelpdeskWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpdeskWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpdeskWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
