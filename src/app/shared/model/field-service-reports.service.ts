import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { FieldServiceReport } from "./field-service-report";
import { AngularFire } from "angularfire2";

@Injectable()
export class FieldServiceReportsService {

  constructor(private af: AngularFire) { }

  findAllFieldServiceReports(): Observable<FieldServiceReport[]> {
    
    return this.af.database.list('fieldServiceReports');
  }

}
