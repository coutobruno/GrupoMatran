import { Component, OnInit } from '@angular/core';
import { FieldServiceReportsService } from "../shared/model/field-service-reports.service";
import { FieldServiceReport } from "../shared/model/field-service-report";

@Component({
  selector: 'app-field-service-reports',
  templateUrl: './field-service-reports.component.html',
  styleUrls: ['./field-service-reports.component.css']
})
export class FieldServiceReportsComponent implements OnInit {

  allFieldServiceReports: FieldServiceReport[];
  filtered: FieldServiceReport[];

  constructor(private fieldServiceReportsService: FieldServiceReportsService) { 

  }

  ngOnInit() {
    this.fieldServiceReportsService.findAllFieldServiceReports()
      .do(console.log)
      .subscribe(
        fieldServiceReports => this.allFieldServiceReports = this.filtered = fieldServiceReports
      );

  }

  search(search:string) {

    this.filtered = this.allFieldServiceReports.filter(fieldServiceReport => fieldServiceReport.publisherId.includes(search));
  }

}
