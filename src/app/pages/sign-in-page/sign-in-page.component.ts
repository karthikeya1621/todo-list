import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
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

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private fireauth: AngularFireAuth
  ) {}

  ngOnInit(): void {

    this.auth.verifyUserAuth()

    this.signInForm = this.fb.group({
      username: this.usernameControl,
      password: this.passwordControl,
    });
  }

  async doSignIn() {
    this.signInForm.markAllAsTouched();
    if (this.signInForm.valid || true) {
      // [SignIn] Sign In

      try {
        const { user } = await this.fireauth.signInWithEmailAndPassword(
          this.usernameControl.value,
          this.passwordControl.value
        );
        if (user) {
          this.auth.setCurrentUser(user);
          this.auth.confirmSignIn();
          this.router.navigate(['/']);
        }
      } catch (error) {
        this.auth.signOut();
        console.log(error);
      }
    } else {
      // Show Validation Errors
    }
  }
}
