import { createAction, props } from '@ngrx/store';
import { IUser } from '../interfaces';

export const bannerImage = createAction('[Place Banner] bannerImage',
    props<{ image: string }>()
);

export const signIn = createAction('[Auth State] SignIn');
export const signOut = createAction('[Auth State] SignOut');

export const openSignInDialog = createAction('[Auth Dialog] openSignInDialog');
export const closeSignInDialog = createAction('[Auth Dialog] closeSignInDialog');

export const clearUserData = createAction('[User Info] clearUserData');
export const updateUserData = createAction('[User Info] updateUserData',
    props<{user: IUser}>()
);
