import { Component } from '@angular/core';

//imports necessários que já fazem parte do angular
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {

  constructor(public formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService) {

  }

  loginForm: FormGroup;

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group
      (
        {
          email: ['', [Validators.required, Validators.email]],
          senha: ['', [Validators.required]]
        }
      )
  }


  get dadosForm() {
    return this, this.loginForm.controls;
  }

//Regra para passar  os dados do formulário para o service de autenticação e depois redirecionar pra tela de dashboard
  loginUser() {

    this.loginService.login(this.dadosForm["email"].value, this.dadosForm["senha"].value).subscribe(
      token => {
        const tokenString = JSON.stringify(token);
        alert(tokenString);
        this.router.navigate(['/dashboard']);
      },
      err => {
        alert('Ocorreu um erro');
      }

    )
  }

}