import { Component, ViewEncapsulation  } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login({ email: this.email, password: this.password }).subscribe({
      next: (response) => {
        console.log('Login réussi:', response);
        this.router.navigate(['/home-admin']);
      },
      error: (err) => {
        console.error('Erreur de connexion:', err);
        this.errorMessage = 'Email ou mot de passe incorrect';
      },
    });
  }
  
}
