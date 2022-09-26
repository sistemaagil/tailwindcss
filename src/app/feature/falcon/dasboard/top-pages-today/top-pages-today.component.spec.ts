import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPagesTodayComponent } from './top-pages-today.component';

describe('TopPagesTodayComponent', () => {
  let component: TopPagesTodayComponent;
  let fixture: ComponentFixture<TopPagesTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopPagesTodayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopPagesTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
