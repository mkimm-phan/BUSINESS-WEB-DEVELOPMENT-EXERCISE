import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingTwoWayComponentComponent } from './binding-two-way-component.component';

describe('BindingTwoWayComponentComponent', () => {
  let component: BindingTwoWayComponentComponent;
  let fixture: ComponentFixture<BindingTwoWayComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BindingTwoWayComponentComponent]
    });
    fixture = TestBed.createComponent(BindingTwoWayComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
