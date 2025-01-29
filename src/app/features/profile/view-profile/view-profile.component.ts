import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { UpdateService } from '../../../core/services/update.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ViewProfileComponent implements OnInit {
  user: any = {};

  constructor(private updateService: UpdateService) {}

  ngOnInit(): void {
    this.updateService.getUserDetails().subscribe(
      (data) => {
        this.user = data;
      },
      (error) => {
        console.error('Error fetching user data', error);
      }
    );
  }
}
