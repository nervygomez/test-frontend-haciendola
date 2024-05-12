import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: ''
})
export class LoginPageComponent implements OnInit{

  userName = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);

  constructor(
    private _authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {  }

  login(): void {
    const usernameValue = this.userName.value!;
    const passwordValue = this.password.value!;

    if (usernameValue === '' || passwordValue === '') return;
    
    this._authService.login(usernameValue, passwordValue).subscribe({
      next: response => {
        this.router.navigate(['/product']);
      },
      error: error => {
        console.error('Error durante el inicio de sesión:', error);
      }
    });
  }

}

