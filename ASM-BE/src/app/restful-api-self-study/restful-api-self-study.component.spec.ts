import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestfulAPISelfStudyComponent } from './restful-api-self-study.component';

describe('RestfulAPISelfStudyComponent', () => {
  let component: RestfulAPISelfStudyComponent;
  let fixture: ComponentFixture<RestfulAPISelfStudyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestfulAPISelfStudyComponent]
    });
    fixture = TestBed.createComponent(RestfulAPISelfStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
