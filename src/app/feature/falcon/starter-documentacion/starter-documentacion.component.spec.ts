import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterDocumentacionComponent } from './starter-documentacion.component';

describe('StarterDocumentacionComponent', () => {
  let component: StarterDocumentacionComponent;
  let fixture: ComponentFixture<StarterDocumentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarterDocumentacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarterDocumentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
