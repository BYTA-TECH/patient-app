import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationsListPage } from './qualifications-list.page';

describe('QualificationsListPage', () => {
  let component: QualificationsListPage;
  let fixture: ComponentFixture<QualificationsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualificationsListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualificationsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
