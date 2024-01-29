import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {
        path:"",
        pathMatch:"full",
        redirectTo:"login"
    },
    {
        //comando usado no terminal para gerar todos os componentes necessarios de login: ng g c pages/login
        path:"login", 
        component: LoginComponent
    }, 
    {
        path:"", 
        component: LoginComponent
    },
    {
        //comando usado no terminal para gerar todos os componentes necessarios de dashboard: ng g c pages/dashboard
        //criado novo arquivo dashboard-routing.module.ts e dashboard.module.ts
        path:"dashboard", 
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m=> m.DashboardModule)
    }
];
