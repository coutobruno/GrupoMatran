import { Component, OnInit, Input } from '@angular/core';
import { FieldServiceReportsService } from "../shared/model/field-service-reports.service";
import { FieldServiceReport } from "../shared/model/field-service-report";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allFieldServiceReports: FieldServiceReport[];
  filtered: FieldServiceReport[];
  fieldServiceReports: FieldServiceReport[];


  constructor(private fieldServiceReportsService: FieldServiceReportsService) {


  }

  ngOnInit() {

    this.fieldServiceReportsService.findAllFieldServiceReports()
      .do(console.log)
      .subscribe(
      fieldServiceReports => this.allFieldServiceReports = this.filtered = fieldServiceReports
      );

  }

  search(search: string) {

    this.filtered = this.allFieldServiceReports.filter(fieldServiceReport => fieldServiceReport.publisherId.includes(search));
  }

}
