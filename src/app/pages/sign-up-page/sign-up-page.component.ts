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
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss'],
})
export class SignUpPageComponent implements OnInit {
  signUpForm: FormGroup;
  usernameControl = new FormControl('', Validators.required);
  passwordControl = new FormControl('', Validators.required);

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private fireauth: AngularFireAuth
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      username: this.usernameControl,
      password: this.passwordControl,
    });
  }

  async doSignUp() {
    this.signUpForm.markAllAsTouched();
    if (this.signUpForm.valid || true) {
      try {
        const { user } = await this.fireauth.createUserWithEmailAndPassword(
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
