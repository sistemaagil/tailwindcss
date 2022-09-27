import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpdeskChatsComponent } from './helpdesk-chats.component';

describe('HelpdeskChatsComponent', () => {
  let component: HelpdeskChatsComponent;
  let fixture: ComponentFixture<HelpdeskChatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpdeskChatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpdeskChatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
