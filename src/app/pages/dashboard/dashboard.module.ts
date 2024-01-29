import { NgModule  } from '@angular/core';
import {  CommonModule   } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

//ele havia declarado o dashboardComponent no declarations, eu declarei no imports pq deu erro
@NgModule({
    providers:[],
    declarations:[],
    imports:[CommonModule, DashboardRoutingModule, DashboardComponent]
})

export class DashboardModule{}