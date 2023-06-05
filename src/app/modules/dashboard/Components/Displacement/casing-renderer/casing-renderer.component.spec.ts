import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasingRendererComponent } from './casing-renderer.component';

describe('CasingRendererComponent', () => {
  let component: CasingRendererComponent;
  let fixture: ComponentFixture<CasingRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasingRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasingRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
