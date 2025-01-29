import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MedicationService {
  private baseUrl = `${environment.apiUrl}/medication`;

  constructor(private http: HttpClient) {}

  getTodayMedication(): Observable<any> {
    return this.http.get(`${this.baseUrl}/today`, { withCredentials: true });
  }
  getMedicationByDate(date: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/archive`, { date }, { withCredentials: true });
  }
}
