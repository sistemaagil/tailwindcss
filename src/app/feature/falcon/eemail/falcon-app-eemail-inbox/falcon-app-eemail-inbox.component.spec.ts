import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconAPPEemailInboxComponent } from './falcon-app-eemail-inbox.component';

describe('FalconAPPEemailInboxComponent', () => {
  let component: FalconAPPEemailInboxComponent;
  let fixture: ComponentFixture<FalconAPPEemailInboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconAPPEemailInboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconAPPEemailInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
