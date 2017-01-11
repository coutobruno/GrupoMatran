import { Route } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PublishersComponent } from "./publishers/publishers.component";

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
        path: 'publishers',
        component: PublishersComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
]