import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewoldordersComponent } from './viewoldorders.component';

describe('ViewoldordersComponent', () => {
  let component: ViewoldordersComponent;
  let fixture: ComponentFixture<ViewoldordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewoldordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewoldordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
