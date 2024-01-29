import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MenuService {

  constructor() { }

  //variável global para guardar um estado do menu.
  menuSelecionado: number;

}

