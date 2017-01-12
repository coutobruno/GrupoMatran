import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { firebaseConfig } from "../environments/firebase.config";
import { AngularFireModule } from "angularfire2/index";
import { HomeComponent } from './home/home.component';
import { FieldServiceReportsService } from './shared/model/field-service-reports.service';
import { PublishersService } from './shared/model/publishers.service';
import { AuthService } from './shared/security/auth.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { RouterModule } from "@angular/router";
import { routerConfig } from "./router.config";
import { TopMenuComponent } from './top-menu/top-menu.component';
import { LoginComponent } from './login/login.component';
import { PublishersComponent } from './publishers/publishers.component';
import { FieldServiceReportsComponent } from './field-service-reports/field-service-reports.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopMenuComponent,
    LoginComponent,
    PublishersComponent,
    FieldServiceReportsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [FieldServiceReportsService, PublishersService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
