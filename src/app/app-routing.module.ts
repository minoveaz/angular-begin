import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route} from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';


const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'dashboard', component: DashboardComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
    imports: [
        RouterModule.forRoot( appRoutes, {useHash: true} )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{}
