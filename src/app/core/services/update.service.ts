import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UpdateService {
  private baseUrl = `${environment.apiUrl}/update`;

  constructor(private http: HttpClient) {}

  getUserDetails(): Observable<any> {
    return this.http.get(`${this.baseUrl}/user`, { withCredentials: true });
  }

  updateUser(formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}`, formData, { withCredentials: true });
  }
}

