import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureOverlayComponent } from './picture-overlay.component';

describe('PictureOverlayComponent', () => {
  let component: PictureOverlayComponent;
  let fixture: ComponentFixture<PictureOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PictureOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
