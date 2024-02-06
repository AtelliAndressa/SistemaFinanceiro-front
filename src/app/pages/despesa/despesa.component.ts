import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';

import { NavbarModule } from '../../components/navbar/navbar.module';
import { SidebarModule } from '../../components/sidebar/sidebar.module';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { SelectModel } from '../../models/SelectModel';

@Component({
  selector: 'despesa',
  standalone: true,
  imports: [NavbarModule, SidebarModule, ReactiveFormsModule, FormsModule, CommonModule, NgSelectModule],
  templateUrl: './despesa.component.html',
  styleUrl: './despesa.component.scss'
})
export class DespesaComponent {

  constructor(public menuService:MenuService, public formBuilder: FormBuilder){}

  listSistemas = new Array<SelectModel>();
  sistemaSelect = new SelectModel();
  
  despesaForm: FormGroup;
  ngOnInit() {
    this.menuService.menuSelecionado = 4;

    this.despesaForm = this.formBuilder.group(
      {
        name:['', [Validators.required]]
      }
    )
  }

  dadosForm() {
    return this.despesaForm.controls;
  }

  enviar() {
    debugger
    var dados = this.dadosForm();

    alert(dados["name"].value)
  }
}
