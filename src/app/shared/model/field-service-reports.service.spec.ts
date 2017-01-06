/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FieldServiceReportService } from './field-service-report.service';

describe('FieldServiceReportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FieldServiceReportService]
    });
  });

  it('should ...', inject([FieldServiceReportService], (service: FieldServiceReportService) => {
    expect(service).toBeTruthy();
  }));
});
