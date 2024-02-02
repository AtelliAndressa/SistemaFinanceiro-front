import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';

import { NavbarModule } from '../../components/navbar/navbar.module';
import { SidebarModule } from '../../components/sidebar/sidebar.module';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sistema',
  standalone: true,
  imports: [NavbarModule, SidebarModule, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './sistema.component.html',
  styleUrl: './sistema.component.scss'
})

export class SistemaComponent {
  
  constructor(public menuService: MenuService, public formBuilder: FormBuilder){}

  sistemaForm: FormGroup;


  ngOnInit() {
    this.menuService.menuSelecionado = 2;

    this.sistemaForm = this.formBuilder.group(
      {
        name:['', [Validators.required]]
      }
    )
  }

  dadosForm() {
    return this.sistemaForm.controls;
  }

  enviar() {
    debugger
    var dados = this.dadosForm();

    alert(dados["name"].value);
  }
}
