import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngleFluidRendererComponent } from './angle-fluid-renderer.component';

describe('AngleFluidRendererComponent', () => {
  let component: AngleFluidRendererComponent;
  let fixture: ComponentFixture<AngleFluidRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngleFluidRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngleFluidRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
