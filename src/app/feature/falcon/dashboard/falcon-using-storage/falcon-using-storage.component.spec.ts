import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconUsingStorageComponent } from './falcon-using-storage.component';

describe('FalconUsingStorageComponent', () => {
  let component: FalconUsingStorageComponent;
  let fixture: ComponentFixture<FalconUsingStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FalconUsingStorageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FalconUsingStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
