import { Component } from '@angular/core';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {
  notifications: any[] = [];

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.fetchNotifications();
  }

  fetchNotifications() {
    this.notificationService.getAllNotifications().subscribe({
      next: (data) => {
        this.notifications = data;
        console.log('Notifications récupérées:', data);
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des notifications:', err);
      },
    });
  }
}
