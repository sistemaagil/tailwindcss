import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconSocialFollowersPerfilComponent } from './falcon-social-followers-perfil.component';

describe('FalconSocialFollowersPerfilComponent', () => {
  let component: FalconSocialFollowersPerfilComponent;
  let fixture: ComponentFixture<FalconSocialFollowersPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconSocialFollowersPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconSocialFollowersPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
