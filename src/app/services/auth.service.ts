import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  _isLoggedIn = new BehaviorSubject(false);
  isLoggedIn$ = this._isLoggedIn.asObservable();

  _currentUser = new BehaviorSubject(null)
  currentUser$ = this._currentUser.asObservable()
  constructor(private router: Router, private fireauth: AngularFireAuth, private zone: NgZone) {}

  async signOut() {
    this._isLoggedIn.next(false);
    this._currentUser.next(null)
    await this.fireauth.signOut()
    this.router.navigate(['/signin'])
  }

  confirmSignIn() {
    this._isLoggedIn.next(true);
  }

  setCurrentUser(user) {
    this._currentUser.next(user)
  }

  verifyUserAuth() {
    this.fireauth.onAuthStateChanged((user) => {
      if(user){
        this.setCurrentUser(user)
        this.confirmSignIn()
        this.zone.run(() => {
          this.router.navigate(['/'])
        })
      } else {
        this._currentUser.next(false);
        this._isLoggedIn.next(false);
      }
    })
  }


}
