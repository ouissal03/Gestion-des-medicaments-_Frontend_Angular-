import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) {}

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  register(user: { lastName: string, firstName: string, email: string, pillboxId: string, password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  isAuthenticated(): Observable<boolean> {
    return this.http.get(`${this.baseUrl}/check-auth`, { withCredentials: true }).pipe(
      map(() => true), 
      catchError(() => of(false)) 
    );
  }
  
}
