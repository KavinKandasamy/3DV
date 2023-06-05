import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepthFluidRendererComponent } from './depth-fluid-renderer.component';

describe('DepthFluidRendererComponent', () => {
  let component: DepthFluidRendererComponent;
  let fixture: ComponentFixture<DepthFluidRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepthFluidRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepthFluidRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
