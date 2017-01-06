import { Component } from '@angular/core';
import {initializeApp, database} from 'firebase';
import {firebaseConfig} from '../environments/firebase.config';
import {AngularFire} from "angularfire2";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works fine!';

  constructor(private af: AngularFire) {

    
  }
}
