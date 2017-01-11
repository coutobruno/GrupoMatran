import { Component, OnInit } from '@angular/core';
import { FieldServiceReportsService } from "../shared/model/field-service-reports.service";
import { FieldServiceReport } from "../shared/model/field-service-report";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

allFieldServiceReports: FieldServiceReport[];
filtered: FieldServiceReport[];


  constructor(private fieldServiceReportsService: FieldServiceReportsService) {
    
     
  }

  ngOnInit() {
    this.fieldServiceReportsService.findAllFieldServiceReports()
        .subscribe(
          fieldServiceReports => this.allFieldServiceReports = this.filtered= fieldServiceReports
        );
  }

  search(search:string) {

    this.filtered = this.allFieldServiceReports.filter(fieldServiceReport => fieldServiceReport.publisherId.includes(search));
  }

}
