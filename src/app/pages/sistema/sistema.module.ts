import { NgModule  } from '@angular/core';
import {  CommonModule   } from '@angular/common';

import { SistemaRoutingModule } from './sistema-routing.module';
import { SistemaComponent } from './sistema.component';

import { NavbarModule } from '../../components/navbar/navbar.module';
import { SidebarModule } from '../../components/sidebar/sidebar.module';

//ele havia declarado o dashboardComponent no declarations, eu declarei no imports pq deu erro
@NgModule({
    providers:[],
    declarations:[],
    imports:[CommonModule, SistemaRoutingModule, SistemaComponent, NavbarModule, SidebarModule]
})

export class SistemaModule{}