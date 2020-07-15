import { createAction } from '@ngrx/store';

export const signIn = createAction('[Counter Component] SignIn');
export const signOut = createAction('[Counter Component] SignOut');

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');