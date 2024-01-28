import { Component } from '@angular/core';

//imports necessários que já fazem parte do angular
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(public formBuilder: FormBuilder, private router: Router)  { }
  loginForm : FormGroup;

  //validação prontas para os campos de input
  ngOnInit():void {
    this.loginForm = this.formBuilder.group(
      {
        email : ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required]]
      }
    )
  }

  //obtém dados do form
  get dadosForm() 
  {
    return this.loginForm.controls;
  }

  //quando logar chama esse método.
  loginUser()
  {
    alert("ok")
  }

}