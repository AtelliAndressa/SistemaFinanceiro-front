import { NgModule  } from '@angular/core';
import {  CommonModule   } from '@angular/common';

import { DespesaComponent } from './despesa.component';
import { DespesaRoutingModule } from './despesa-routing.module';

import { NavbarModule } from '../../components/navbar/navbar.module';
import { SidebarModule } from '../../components/sidebar/sidebar.module';

//ele havia declarado o dashboardComponent no declarations, eu declarei no imports pq deu erro
@NgModule({
    providers:[],
    declarations:[],
    imports:[CommonModule, DespesaComponent, DespesaRoutingModule, NavbarModule, SidebarModule]
})

export class DespesaModule{}