import { Injectable } from '@angular/core';
import { AngularFire } from "angularfire2";
import { Observable } from "rxjs/Rx";
import { Publisher } from "./publisher";

@Injectable()
export class PublishersService {

  constructor(private af:AngularFire) { }

  findAllPublishers(): Observable<Publisher[]> {

    return this.af.database.list('publishers').map(Publisher.fromJsonArray);

  }

}
