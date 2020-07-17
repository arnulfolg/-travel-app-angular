import { createAction } from '@ngrx/store';

export const signIn = createAction('[Counter Component] SignIn');
export const signOut = createAction('[Counter Component] SignOut');

export const openSignInDialog = createAction('[Counter Component] openSignInDialog');
export const closeSignInDialog = createAction('[Counter Component] closeSignInDialog');