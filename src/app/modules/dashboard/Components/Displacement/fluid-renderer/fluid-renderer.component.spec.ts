import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluidRendererComponent } from './fluid-renderer.component';

describe('FluidRendererComponent', () => {
  let component: FluidRendererComponent;
  let fixture: ComponentFixture<FluidRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluidRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FluidRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
