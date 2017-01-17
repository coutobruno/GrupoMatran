import { Route } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PublishersComponent } from "./publishers/publishers.component";
import { FieldServiceReportsComponent } from "./field-service-reports/field-service-reports.component";

export const routerConfig : Route[] = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'fieldServiceReports',
        component: FieldServiceReportsComponent
    },
    {
        path: 'publishers',
        component: PublishersComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
]