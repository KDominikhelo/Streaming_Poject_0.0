import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  constructor(private router: Router) {}


  login(username: string, password: string): boolean {
    this.isLoggedIn = true;
    return true;
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}