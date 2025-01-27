import { Component, ViewEncapsulation  } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class RegisterComponent {
  lastName: string = '';
  firstName: string = '';
  email: string = '';
  pillboxId: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    this.authService.register({
      lastName: this.lastName,
      firstName: this.firstName,
      email: this.email,
      pillboxId: this.pillboxId,
      password: this.password
    }).subscribe({
      next: (response) => {
        console.log('Register réussi:', response);
        this.router.navigate(['/home-admin']);
      },
      error: (err) => {
        console.error('Erreur de connexion:', err);
        this.errorMessage = 'Email ou mot de passe incorrect';
      },
    });
  }
}
