import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconCrmNewContactComponent } from './falcon-crm-new-contact.component';

describe('FalconCrmNewContactComponent', () => {
  let component: FalconCrmNewContactComponent;
  let fixture: ComponentFixture<FalconCrmNewContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconCrmNewContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconCrmNewContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
