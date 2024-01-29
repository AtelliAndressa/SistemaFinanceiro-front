import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sidebar', //nome do componente a ser usado
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})

export class SidebarComponent {

  constructor(private router : Router){}

  //Método do menu que direciona para a rota correta.
  selectMenu(menu:number)
  {
    switch(menu)
    {
      case 1:
        this.router.navigate(['/dashboard']);
        break;

      case 2:
        this.router.navigate(['/sistema']);
        break;

      case 3:
        this.router.navigate(['/categoria']);
        break;

      case 4:
        this.router.navigate(['/despesa'])
        break;

      default:
        break;
    }

  }

}
