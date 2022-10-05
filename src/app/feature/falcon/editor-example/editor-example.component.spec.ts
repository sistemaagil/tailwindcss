import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorExampleComponent } from './editor-example.component';

describe('EditorExampleComponent', () => {
  let component: EditorExampleComponent;
  let fixture: ComponentFixture<EditorExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

