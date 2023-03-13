import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private isLoggedIn = false;
  public loginChangeEvent: EventEmitter<boolean> = new EventEmitter<boolean>;

  constructor(private router: Router) {}


  login(username: string, password: string): boolean {
    this.isLoggedIn = true;
    this.loginChangeEvent.emit(this.isLoggedIn)
    return true;
  }

  logout(): boolean {
    
    this.isLoggedIn = false;
    
    this.loginChangeEvent.emit(this.isLoggedIn)
    return false;
  }

  getIsloggedIn(){
   
    console.log(this.isLoggedIn) 
    return this.isLoggedIn;

  };

}