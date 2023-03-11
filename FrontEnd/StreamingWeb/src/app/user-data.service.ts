import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  userData: any[] = [];
  private currentUserSubject = new BehaviorSubject<any>(null);


  constructor() { }

  addUser(user: any) {
    this.userData.push(user);
  }

    getCurrentUser(): Observable<any> {
    return this.currentUserSubject.asObservable();
  }

  updateCurrentUser(user: any) {
    this.currentUserSubject.next(user);
  }
}