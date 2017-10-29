import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverImageComponent } from './hover-image.component';

describe('HoverImageComponent', () => {
  let component: HoverImageComponent;
  let fixture: ComponentFixture<HoverImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoverImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoverImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
