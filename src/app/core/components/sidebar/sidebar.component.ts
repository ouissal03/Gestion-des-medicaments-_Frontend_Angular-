import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateService } from '../../../core/services/update.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent implements OnInit {
  user: any = {};

  constructor(private updateService: UpdateService, private router: Router) {}

  isActive(route: string): boolean {
    return this.router.url === route;
  }
  navigateTo(path: string) {
    this.router.navigate([path]);
  }
  
  ngOnInit() {
    this.updateService.getUserDetails().subscribe({
      next: (response) => {
        this.user = response; 
        console.log('Détails utilisateur récupérés avec succès:', response);
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des détails utilisateur:', err);
      },
    });
  }
}
