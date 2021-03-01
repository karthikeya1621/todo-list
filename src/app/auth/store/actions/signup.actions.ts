import { createAction, props } from '@ngrx/store';
import { User } from '../models/signup.model';

export const signUp = createAction(
  '[SignUp] SignUp',
  props<User>()
);

export const signUpSuccess = createAction('[SignUp] SignUp Success');

export const signUpFailure = createAction('[SignUp] SignUp Failure');
