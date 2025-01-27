import { Component, ViewEncapsulation } from '@angular/core';
import { MedicationService } from '../../core/services/medication.service';
import { UpdateService } from '../../core/services/update.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ArchiveComponent {
  medicationStatus: any = {};
  selectedDate: string = '';

  constructor(private medicationService: MedicationService, private updateService: UpdateService) {}

 

  onDateSubmit() {
    if (!this.selectedDate) {
      console.error('Veuillez sélectionner une date.');
      return;
    }

    this.medicationService.getMedicationByDate(this.selectedDate).subscribe({
      next: (data) => {
        this.medicationStatus = data;
        console.log('Données de statut des médicaments pour la date sélectionnée:', data);
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
