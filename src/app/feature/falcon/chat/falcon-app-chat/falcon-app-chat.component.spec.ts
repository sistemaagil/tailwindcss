import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconAPPChatComponent } from './falcon-app-chat.component';

describe('FalconAPPChatComponent', () => {
  let component: FalconAPPChatComponent;
  let fixture: ComponentFixture<FalconAPPChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconAPPChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconAPPChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
