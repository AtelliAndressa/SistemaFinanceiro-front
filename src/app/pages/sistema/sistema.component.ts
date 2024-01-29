import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';

import { NavbarModule } from '../../components/navbar/navbar.module';
import { SidebarModule } from '../../components/sidebar/sidebar.module';

@Component({
  selector: 'sistema',
  standalone: true,
  imports: [NavbarModule, SidebarModule],
  templateUrl: './sistema.component.html',
  styleUrl: './sistema.component.scss'
})

export class SistemaComponent {
  
  constructor(public menuService: MenuService){}

  ngOnInit(){
    this.menuService.menuSelecionado = 2;
  }
}
