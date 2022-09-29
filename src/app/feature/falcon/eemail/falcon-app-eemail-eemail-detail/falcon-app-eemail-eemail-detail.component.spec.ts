import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconAPPEemailEemailDetailComponent } from './falcon-app-eemail-eemail-detail.component';

describe('FalconAPPEemailEemailDetailComponent', () => {
  let component: FalconAPPEemailEemailDetailComponent;
  let fixture: ComponentFixture<FalconAPPEemailEemailDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconAPPEemailEemailDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconAPPEemailEemailDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
