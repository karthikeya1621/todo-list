import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  _isLoggedIn = new BehaviorSubject(true);
  isLoggedIn$ = this._isLoggedIn.asObservable();
  constructor() {}

  signOut() {
    this._isLoggedIn.next(false);
  }

  confirmSignIn() {
    this._isLoggedIn.next(true);
  }
}
