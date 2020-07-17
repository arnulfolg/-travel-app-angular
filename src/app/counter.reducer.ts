import { createReducer, on } from '@ngrx/store';
import { signIn, signOut, openSignInDialog, closeSignInDialog } from './counter.actions';

export const loggedIn = false;
export const signInDialog = false;

const _loggedInReducer = createReducer(loggedIn,
  on(signIn, state => true),
  on(signOut, state => false)
);

const _signInDialogReducer = createReducer(signInDialog,
  on(openSignInDialog, state => true),
  on(closeSignInDialog, state => false)
);


export function loggedInReducer(state, action) {
  return _loggedInReducer(state, action);
}

export function signInDialogReducer(state, action) {
  return _signInDialogReducer(state, action);
}