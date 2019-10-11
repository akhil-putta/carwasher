import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingforsearchingComponent } from './bookingforsearching.component';

describe('BookingforsearchingComponent', () => {
  let component: BookingforsearchingComponent;
  let fixture: ComponentFixture<BookingforsearchingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingforsearchingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingforsearchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
