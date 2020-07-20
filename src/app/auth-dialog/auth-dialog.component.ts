import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Store, select } from '@ngrx/store';
import { signIn, closeSignInDialog, signOut } from '../counter.actions';
import { Observable } from 'rxjs';
import { AuthDialogService } from "./auth-dialog.service";

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss']
})
export class AuthDialogComponent implements OnInit {

  myForm : FormGroup;
  loggedIn$: Observable<Boolean>;

  constructor(private store: Store<{ loggedIn: Boolean }>, private _formBuilder : FormBuilder, private _authDialogService: AuthDialogService) { 
    this.loggedIn$ = store.pipe(select('loggedIn'));
  }

  ngOnInit(): void {
    this.myForm = this._formBuilder.group({
      email: '',
      password: ''
    })

    this._authDialogService.user$.subscribe(user => {
          if (user) {
          this.store.dispatch(signIn());

          this.store.pipe(select('loggedIn')).subscribe(status => {
            status == false ? this.logOut() : ''
          })
        
      } else {
          this.store.dispatch(signOut());
      }
    })
  }

  
  closeModal(): void {
    this.store.dispatch(closeSignInDialog());
  }
  
  logIn(): void {
     this._authDialogService.logInWithEmail(this.myForm.value)
      .then(res => {
        this.store.dispatch(closeSignInDialog());
        this.store.dispatch(signIn());
      }, err => {
        console.log( err.message);
      })
  }

  logOut(): void {
    this._authDialogService.closeSession()
  }

}
