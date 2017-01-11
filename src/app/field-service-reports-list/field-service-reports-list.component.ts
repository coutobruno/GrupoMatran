import { Component, OnInit, Input } from '@angular/core';
import { FieldServiceReport } from "../shared/model/field-service-report";

@Component({
  selector: 'fieldServiceReports-list',
  templateUrl: './field-service-reports-list.component.html',
  styleUrls: ['./field-service-reports-list.component.css']
})
export class FieldServiceReportsListComponent implements OnInit {

  @Input()
  fieldServiceReports: FieldServiceReport[];


  constructor() { }

  ngOnInit() {
  }

}
