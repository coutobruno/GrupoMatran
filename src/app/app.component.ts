import { Component } from '@angular/core';
import {initializeApp, database} from 'firebase';
import {firebaseConfig} from '../environments/firebase.config';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works fine!';

  publishers$:FirebaseListObservable<any>;
  reports$:FirebaseObjectObservable<any>;

  firstPublisher:any;

  constructor(private af: AngularFire) {

    this.publishers$ = af.database.list('publishers');

    this.publishers$.subscribe(console.log);

    this.reports$ = af.database.object('reports/-K_nBy_7UpL11GtYmzxt');

    this.reports$.subscribe(console.log);

    this.publishers$.map(publishers => publishers[0])
        .subscribe(
          publisher => this.firstPublisher = publisher
        );

  }

  listPush() {

    this.publishers$.push({firstName: 'TEST'});
  }
}
