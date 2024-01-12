import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL = "http://localhost:3000";
  USER_STORAGE_KEY = "USER";

  loginResponse: BehaviorSubject<LoginResponse | undefined> = new BehaviorSubject<LoginResponse | undefined>(undefined);

  currentUser : Observable<User | undefined> = this.loginResponse.pipe(map(login => login?.user));

  constructor(private router: Router, private http : HttpClient) {
    this.loginResponse.subscribe({
      next: user => {
        if(user) sessionStorage.setItem(this.USER_STORAGE_KEY,JSON.stringify(user))
      }
    })
    const sessionUser = sessionStorage.getItem(this.USER_STORAGE_KEY)
    if(sessionUser) this.loginResponse.next(JSON.parse(sessionUser))
  }

  register(user: User) {
    return this.http.post<LoginResponse>(`${this.API_URL}/register`, user)
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<LoginResponse>(`${this.API_URL}/login`, {email: email, password: password})
      .pipe(map(response => {
        this.loginResponse.next(response);
        return response.user;
      }))
  }

  logout() {
    this.loginResponse.next(undefined);
    sessionStorage.clear()
    this.router.navigate(["/login"])
  }

  isLogged(): Observable<boolean> {
    // Vérifie que la valeur n'est pas 'falsy'
    return this.currentUser.pipe(map(value => !!value))
  }

}

interface LoginResponse {
  accessToken: string;
  user: User
}
