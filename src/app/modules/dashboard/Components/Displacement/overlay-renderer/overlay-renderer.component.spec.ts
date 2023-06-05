import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayRendererComponent } from './overlay-renderer.component';

describe('OverlayRendererComponent', () => {
  let component: OverlayRendererComponent;
  let fixture: ComponentFixture<OverlayRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlayRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverlayRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
