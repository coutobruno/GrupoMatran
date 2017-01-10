import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { firebaseConfig } from "../environments/firebase.config";
import { AngularFireModule } from "angularfire2/index";
import { HomeComponent } from './home/home.component';
import { FieldServiceReportsService } from './shared/model/field-service-reports.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    HttpModule
  ],
  providers: [FieldServiceReportsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
