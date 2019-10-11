import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetpaswwordComponent } from './setpaswword.component';

describe('SetpaswwordComponent', () => {
  let component: SetpaswwordComponent;
  let fixture: ComponentFixture<SetpaswwordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetpaswwordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetpaswwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
