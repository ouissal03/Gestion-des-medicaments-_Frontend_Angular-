import { Component, OnInit , ViewEncapsulation} from '@angular/core';
import { MedicationService } from '../../core/services/medication.service';
import { UpdateService } from '../../core/services/update.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
    styleUrls: ['./home-admin.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class HomeAdminComponent implements OnInit {
  medicationStatus: any = {};
  user: any = {};

  constructor(private medicationService: MedicationService, private updateService: UpdateService,) {}

  ngOnInit() {
    this.fetchMedicationStatus();

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

  fetchMedicationStatus() {
    this.medicationService.getTodayMedication().subscribe({
      next: (data) => {
        this.medicationStatus = data;
        console.log('Données de statut des médicaments récupérées :', data);
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des données :', err);
      },
    });
  }

  getWrapperClass(status: string): string {
    switch (status) {
      case 'taken':
        return 'wrapperc';
      case 'missed':
        return 'wrapperu';
      case 'not_taken':
        return 'wrapperq';
      default:
        return 'wrapperq';
    }
  }
  
  getBoxClass(status: string): string {
    switch (status) {
      case 'taken':
        return 'boxc';
      case 'missed':
        return 'boxu';
      case 'not_taken':
        return 'boxf';
      default:
        return 'boxf';
    }
  }
}

