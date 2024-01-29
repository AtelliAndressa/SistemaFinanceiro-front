import { NgModule  } from '@angular/core';
import {  CommonModule   } from '@angular/common';
import { CategoriaComponent } from './categoria.component';
import { CategoriaRoutingModule } from './categoria-routing.module';

//ele havia declarado o dashboardComponent no declarations, eu declarei no imports pq deu erro
@NgModule({
    providers:[],
    declarations:[],
    imports:[CommonModule, CategoriaComponent, CategoriaRoutingModule]
})

export class CategoriaModule{}