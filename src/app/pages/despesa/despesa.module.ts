import { NgModule  } from '@angular/core';
import {  CommonModule   } from '@angular/common';
import { DespesaComponent } from './despesa.component';
import { DespesaRoutingModule } from './despesa-routing.module';

//ele havia declarado o dashboardComponent no declarations, eu declarei no imports pq deu erro
@NgModule({
    providers:[],
    declarations:[],
    imports:[CommonModule, DespesaComponent, DespesaRoutingModule]
})

export class DespesaModule{}