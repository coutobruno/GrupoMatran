import { Component, OnInit } from '@angular/core';
import { PublishersService } from "../shared/model/publishers.service";
import { Observable } from "rxjs/Rx";
import { Publisher } from "../shared/model/publisher";

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
  styleUrls: ['./publishers.component.css']
})
export class PublishersComponent implements OnInit {

  publishers$: Observable<Publisher[]>;

  constructor(private publishersService: PublishersService) {

   }

  ngOnInit() {
    
    this.publishers$ = this.publishersService.findAllPublishers()
        .do(console.log);
  }

}
