import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { SidebarModule } from '../../components/sidebar/sidebar.module';
import { FormBuilder, FormGroup, FormsModule, NgSelectOption, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'categoria',
  standalone: true,
  imports: [NavbarModule, SidebarModule, ReactiveFormsModule, FormsModule, CommonModule, NgSelectModule],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent {

  constructor(public menuService:MenuService, public formBuilder: FormBuilder){}

  categoriaForm: FormGroup;

  ngOnInit(){
    this.menuService.menuSelecionado = 3;

    this.categoriaForm = this.formBuilder.group(
      {
        name:['', [Validators.required]]
      }
    )
  }

  dadosForm() {
    return this.categoriaForm.controls;
  }

  enviar() {
    debugger
    var dados = this.dadosForm();

    alert(dados["name"].value)
  }

}
