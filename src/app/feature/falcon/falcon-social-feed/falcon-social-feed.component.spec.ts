import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconSocialFeedComponent } from './falcon-social-feed.component';

describe('FalconSocialFeedComponent', () => {
  let component: FalconSocialFeedComponent;
  let fixture: ComponentFixture<FalconSocialFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconSocialFeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconSocialFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
