import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss'],
})
export class SignInPageComponent implements OnInit {
  signInForm: FormGroup;
  usernameControl = new FormControl('', Validators.required);
  passwordControl = new FormControl('', Validators.required);

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      username: this.usernameControl,
      password: this.passwordControl,
    });
  }

  doSignIn() {
    this.signInForm.markAllAsTouched();
    if (this.signInForm.valid || true) {
      // [SignIn] Sign In

      if (true) {
        this.auth._isLoggedIn.next(true);
        console.log('signInSuccess')
        this.router.navigate(['/'])
      } else {
        this.auth._isLoggedIn.next(false);
        console.log('signInFailure')
      }
    } else {
      // Show Validation Errors
    }
  }
}
