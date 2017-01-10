import { Component, OnInit } from '@angular/core';
import { FieldServiceReportsService } from "../shared/model/field-service-reports.service";
import { FieldServiceReport } from "../shared/model/field-service-report";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

fieldServiceReports: FieldServiceReport[];


  constructor(private fieldServiceReportsService: FieldServiceReportsService) {
    
     
  }

  ngOnInit() {
    this.fieldServiceReportsService.findAllFieldServiceReports()
        .do(console.log)
        .subscribe(
          fieldServiceReports => this.fieldServiceReports = fieldServiceReports
        );
  }

}
