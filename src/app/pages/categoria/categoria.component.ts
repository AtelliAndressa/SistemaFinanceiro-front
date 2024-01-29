import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';

import { NavbarModule } from '../../components/navbar/navbar.module';
import { SidebarModule } from '../../components/sidebar/sidebar.module';

@Component({
  selector: 'categoria',
  standalone: true,
  imports: [NavbarModule, SidebarModule],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent {

  constructor(public menuService:MenuService){}

  ngOnInit(){
    this.menuService.menuSelecionado = 3;
  }

}
