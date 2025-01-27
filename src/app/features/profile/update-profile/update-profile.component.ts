import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  updateProfileForm!: FormGroup; // Declare without initializing here
  userData: any; // To store user data fetched from the API
  message: string[] = []; // To store messages like success or error

  constructor(
    private fb: FormBuilder, // Dependency injection of FormBuilder
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Initialize form here
    this.updateProfileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      image: [null]
    });

    // Fetch user data from API (use a real API endpoint here)
    this.http.get('http://localhost:8080/api/update/user').subscribe((data: any) => {
      this.userData = data;

      // Pre-fill form fields with fetched user data
      this.updateProfileForm.patchValue({
        firstName: this.userData.firstName || '',
        lastName: this.userData.lastName || '',
        email: this.userData.email || '',
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
    });
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.updateProfileForm.patchValue({ image: file });
    }
  }

  onSubmit(): void {
    if (this.updateProfileForm.valid) {
      const formData = new FormData();
      const { firstName, lastName, email, oldPassword, newPassword, confirmPassword, image } = this.updateProfileForm.value;

      // Check if password fields match
      if (newPassword !== confirmPassword) {
        this.message.push('Le mot de passe de confirmation ne correspond pas !');
        return;
      }

      // Add form data
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);
      formData.append('email', email);
      formData.append('password', newPassword);
      formData.append('image', image);

      // Send the data to API
      this.http.post('http://localhost:8080/api/update', formData).subscribe(
        (response: any) => {
          this.message.push('Profil mis à jour avec succès !');
          this.router.navigate(['/profile']); // Redirect to profile view
        },
        (error) => {
          this.message.push('Erreur lors de la mise à jour du profil');
        }
      );
    } else {
      this.message.push('Veuillez remplir correctement tous les champs');
    }
  }
}
