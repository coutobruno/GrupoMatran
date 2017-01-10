import { Component, OnInit } from '@angular/core';
import { FieldServiceReportsService } from "../shared/model/field-service-reports.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private fieldServiceReportsService: FieldServiceReportsService) {
    
     
  }

  ngOnInit() {
    this.fieldServiceReportsService.findAllFieldServiceReports();
  }

}
