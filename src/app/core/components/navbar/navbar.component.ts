import { Component , ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent {
  constructor(private http: HttpClient, private router: Router) {}
    private baseUrl = `${environment.apiUrl}/auth`;

  logout() {
    this.http.post(`${this.baseUrl}/logout`, {}, { responseType: 'text' })
    .subscribe((response ) => {
      console.log(response);
      this.router.navigate(['/auth']);
    }, error => {
      console.error(error);
    });
  }
}

