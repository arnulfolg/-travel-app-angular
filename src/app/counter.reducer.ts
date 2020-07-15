import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, signIn, signOut } from './counter.actions';

export const initialState = 0;
export const userLoggedIn = false;

const _loginReducer = createReducer(userLoggedIn,
  on(signIn, state => true),
  on(signOut, state => false)
);

const _counterReducer = createReducer(initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => 0),
);

export function loginReducer(state, action) {
  return _loginReducer(state, action);
}

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}