import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorBookingPage } from './doctor-booking.page';

describe('DoctorBookingPage', () => {
  let component: DoctorBookingPage;
  let fixture: ComponentFixture<DoctorBookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorBookingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorBookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
