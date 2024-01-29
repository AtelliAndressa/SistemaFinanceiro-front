import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';

import { NavbarModule } from '../../components/navbar/navbar.module';
import { SidebarModule } from '../../components/sidebar/sidebar.module';

@Component({
  selector: 'despesa',
  standalone: true,
  imports: [NavbarModule, SidebarModule],
  templateUrl: './despesa.component.html',
  styleUrl: './despesa.component.scss'
})
export class DespesaComponent {

  constructor(public menuService:MenuService){}

  ngOnInit() {
    this.menuService.menuSelecionado = 4;
  }
}
