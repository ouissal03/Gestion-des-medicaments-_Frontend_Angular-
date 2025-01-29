import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UpdateService } from '../../../core/services/update.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class UpdateProfileComponent implements OnInit {
  updateProfileForm!: FormGroup; 
  userData: any; 
  message: string[] = []; 

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private updateService: UpdateService
  ) {}

  ngOnInit(): void {
    this.updateProfileForm = this.fb.group({
      firstName: ['', []], 
      lastName: ['', []], 
      email: ['', [Validators.email]], 
      oldPassword: ['', []], 
      newPassword: ['', []], 
      confirmPassword: ['', []], 
      image: [null] 
    });
    

    // Fetch user data to pre-fill the form
    this.updateService.getUserDetails().subscribe((data: any) => {
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
  
     
      if (newPassword || confirmPassword) {  
        if (newPassword !== confirmPassword) {
          this.message.push('Le mot de passe de confirmation ne correspond pas !');
          return;
        }
        formData.append('password', newPassword); 
      }
  
      
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);
      formData.append('email', email);
  
     
      if (image) {
        formData.append('image', image);
      }
  
    
      this.updateService.updateUser(formData).subscribe(
        (response: any) => {
          this.message.push('Profil mis à jour avec succès !');
          this.router.navigate(['/profile']); 
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
