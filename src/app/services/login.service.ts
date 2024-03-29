import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private httpClient: HttpClient) { }

  private readonly baseUrl = environment.endPoint;

  //Serviço para chamar o back e pegar o token
  login(email: string, password: string) {
    return this.httpClient.post<any>(`${this.baseUrl}/CreateToken`, { email, password });
  }
}

//Para criar a pages de login usei o comando no terminal: ng g c pages/login
