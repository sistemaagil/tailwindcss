import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaasActiveUsersComponent } from './saas-active-users.component';

describe('SaasActiveUsersComponent', () => {
  let component: SaasActiveUsersComponent;
  let fixture: ComponentFixture<SaasActiveUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaasActiveUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaasActiveUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
