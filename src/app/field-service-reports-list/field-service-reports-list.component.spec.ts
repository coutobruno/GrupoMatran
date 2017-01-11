/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FieldServiceReportsListComponent } from './field-service-reports-list.component';

describe('FieldServiceReportsListComponent', () => {
  let component: FieldServiceReportsListComponent;
  let fixture: ComponentFixture<FieldServiceReportsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldServiceReportsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldServiceReportsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
