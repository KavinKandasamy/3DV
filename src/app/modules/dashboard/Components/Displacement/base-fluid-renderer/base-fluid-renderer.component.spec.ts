import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseFluidRendererComponent } from './base-fluid-renderer.component';

describe('BaseFluidRendererComponent', () => {
  let component: BaseFluidRendererComponent;
  let fixture: ComponentFixture<BaseFluidRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseFluidRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseFluidRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
