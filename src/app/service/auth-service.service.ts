import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private baseUrl = 'http://localhost:8080/user';
  private tokenKey = 'authToken';
 private adminUrl=  'http://localhost:8080/admin'

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, credentials);
  }

  adminLogin(credentials: {adminId: string ; email: string; password: string}): Observable<any> {
    return this.http.post<any>(`${this.adminUrl}/login`, credentials);
  }

  register(userData: {
    firstName: string;
    lastName: string;
    motherName: string;
    fatherName: string;
    address: string;
    gender: string;
    state: string;
    city: string;
    dob: string;
    pincode: string;
    course: string;
    email: string;
    password: string;
  }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, userData);
  }
  

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem(this.tokenKey);
    return !!token;
  }

  storeToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  sendEmail(name: string, email: string, message: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/send-email`, { name, email, message });
  }
}
