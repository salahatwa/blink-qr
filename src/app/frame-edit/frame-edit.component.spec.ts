import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameEditComponent } from './frame-edit.component';

describe('FrameEditComponent', () => {
  let component: FrameEditComponent;
  let fixture: ComponentFixture<FrameEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrameEditComponent]
    });
    fixture = TestBed.createComponent(FrameEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
