import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicecentersignupComponent } from './servicecentersignup.component';

describe('ServicecentersignupComponent', () => {
  let component: ServicecentersignupComponent;
  let fixture: ComponentFixture<ServicecentersignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicecentersignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicecentersignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
