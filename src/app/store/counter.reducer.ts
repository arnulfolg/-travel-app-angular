import { createReducer, on } from '@ngrx/store';
import { signIn, signOut, openSignInDialog, closeSignInDialog, updateUserData, clearUserData, bannerImage } from './counter.actions';
import { IUser } from '../interfaces';


export const initialBannerImg = '';
export const initialLoggedIn = false;
export const initialSignInDialog = false;
export const initialUserState: IUser = {
  uid: '',
  name: '',
  email: ''
};

const _bannerImage = createReducer(initialBannerImg,
    on(bannerImage, (state, {image}) => image)
  );

const _loggedInReducer = createReducer(initialLoggedIn,
  on(signIn, state => true),
  on(signOut, state => false)
);

const _signInDialogReducer = createReducer(initialSignInDialog,
  on(openSignInDialog, state => true),
  on(closeSignInDialog, state => false)
);

const _updateUserDataReducer = createReducer(initialUserState,
    on(clearUserData, state => initialUserState),
    on(updateUserData, (state, { user }) => user)
  );

export function bannerImageReducer(state, action): any {
  return _bannerImage(state, action);
}

export function loggedInReducer(state, action): any {
  return _loggedInReducer(state, action);
}

export function signInDialogReducer(state, action): any {
  return _signInDialogReducer(state, action);
}

export function updateUserDataReducer(state, action): any {
  return _updateUserDataReducer(state, action);
}
