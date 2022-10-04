import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconAppChatAppComponent } from './falcon-app-chat-app.component';

describe('FalconAppChatAppComponent', () => {
  let component: FalconAppChatAppComponent;
  let fixture: ComponentFixture<FalconAppChatAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconAppChatAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconAppChatAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
