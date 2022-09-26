import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FalconUsersComponent } from './falcon-users.component';

describe('FalconUsersComponent', () => {
  let component: FalconUsersComponent;
  let fixture: ComponentFixture<FalconUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
