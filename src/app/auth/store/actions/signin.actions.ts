import { createAction, props } from "@ngrx/store";
import { User } from "../models/signup.model";

export const signIn = createAction(
    '[SignIn] SignIn',
    props<User>()
)

export const signInSuccess = createAction(
    '[SignIn] SignIn Success'
)

export const signInFailure = createAction(
    '[SignIn] SignIn Failure'
)