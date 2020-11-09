import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseContentLayoutComponent } from './base-content-layout.component';

describe('BaseContentLayoutComponent', () => {
  let component: BaseContentLayoutComponent;
  let fixture: ComponentFixture<BaseContentLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseContentLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseContentLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
