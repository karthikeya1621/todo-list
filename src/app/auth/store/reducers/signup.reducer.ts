import { createReducer, on, Action } from '@ngrx/store';
import * as SignUpActions from '../actions/signup.actions';
import { User } from '../models/signup.model';

export const initialUsers: User[] = [];

const signUpReducer = createReducer(
  initialUsers,
  on(SignUpActions.signUp, (users, { username, password }) => [
    ...users,
    { username, password },
  ])
);

export function reducer(users: User[] | undefined, action: Action) {
  return signUpReducer(users, action);
}
