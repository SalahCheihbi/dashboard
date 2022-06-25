import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandLightComponent } from './brand-light.component';

describe('BrandLightComponent', () => {
  let component: BrandLightComponent;
  let fixture: ComponentFixture<BrandLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandLightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
