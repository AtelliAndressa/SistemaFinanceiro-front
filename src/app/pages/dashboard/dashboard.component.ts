import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';

import { NavbarModule } from '../../components/navbar/navbar.module';
import { SidebarModule } from '../../components/sidebar/sidebar.module';

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [NavbarModule, SidebarModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent {

  constructor(public menuService: MenuService)
  {

  }

  ngOnInit()
  {
    this.menuService.menuSelecionado = 1;
  }


}
