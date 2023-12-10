import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingStyleComponentComponent } from './binding-style-component.component';

describe('BindingStyleComponentComponent', () => {
  let component: BindingStyleComponentComponent;
  let fixture: ComponentFixture<BindingStyleComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BindingStyleComponentComponent]
    });
    fixture = TestBed.createComponent(BindingStyleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
