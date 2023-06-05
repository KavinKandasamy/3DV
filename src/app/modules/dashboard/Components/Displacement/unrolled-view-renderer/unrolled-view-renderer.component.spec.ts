import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnrolledViewRendererComponent } from './unrolled-view-renderer.component';

describe('UnrolledViewRendererComponent', () => {
  let component: UnrolledViewRendererComponent;
  let fixture: ComponentFixture<UnrolledViewRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnrolledViewRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnrolledViewRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
