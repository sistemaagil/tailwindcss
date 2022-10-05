import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconAPPEemailComposeeComponent } from './falcon-app-eemail-composee.component';

describe('FalconAPPEemailComposeeComponent', () => {
  let component: FalconAPPEemailComposeeComponent;
  let fixture: ComponentFixture<FalconAPPEemailComposeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconAPPEemailComposeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconAPPEemailComposeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
