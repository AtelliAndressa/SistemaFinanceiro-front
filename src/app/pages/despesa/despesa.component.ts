import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'despesa',
  standalone: true,
  imports: [],
  templateUrl: './despesa.component.html',
  styleUrl: './despesa.component.scss'
})
export class DespesaComponent {

  constructor(public menuService:MenuService){}

  ngOnInit() {
    this.menuService.menuSelecionado = 4;
  }
}
