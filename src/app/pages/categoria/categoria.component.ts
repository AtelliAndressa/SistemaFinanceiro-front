import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'categoria',
  standalone: true,
  imports: [],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent {

  constructor(public menuService:MenuService){}

  ngOnInit(){
    this.menuService.menuSelecionado = 3;
  }

}
