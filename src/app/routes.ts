import {Routes} from '@angular/router'
import { LoginComponent } from './login/login.component';
import { ReactiveComponent } from './validation/reactive/reactive.component';
import { TemplateComponent } from './validation/template/template.component';
import { AlertComponent } from './alert/alert.component';
import { ObservableComponent } from './observable/observable.component';

const myroute :  Routes=[{path: '', component: LoginComponent},
{path:'login', component:LoginComponent},

{path:'reactive', component:ReactiveComponent},
{path:'template', component:TemplateComponent},
{path: 'alert', component: AlertComponent},
{path: 'observable', component: ObservableComponent},

// {path: 'busdetails', component: BusDetailsComponent},
// {path: 'payment', component: PaymentComponent},
// {path: 'getAjax', component: GetComponent},
// {path: 'observable', component: ObservableComponent},
// {path: 'alert', component: AlertComponent},
// {path: 'search', component: SearchComponent},
// {path: 'busdetails',loadChildren:'src/app/bus/bus.module#BusModule'},
// {path: 'payment', loadChildren:'src/app/bus/bus.module#BusModule'},
{path: 'search', loadChildren:'src/app/bus/bus.module#BusModule'}
];

export const routes=myroute;