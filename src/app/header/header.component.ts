import { Component, OnInit } from '@angular/core';
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interfaces';
import { signOut, openSignInDialog } from '../store/counter.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedIn$: Observable<boolean>;
  userData$: Observable<IUser>;

  faSignInAlt = faSignInAlt;
  faSignOutAlt = faSignOutAlt;

  constructor(private store: Store<{ loggedIn: boolean, userData: IUser }>) {
    this.loggedIn$ = store.pipe(select('loggedIn'));
    this.userData$ = this.store.pipe(select('userData'));
   }

   displayButton: boolean;

  ngOnInit(): void {
  }

  logIn() {
    this.store.dispatch(openSignInDialog());
  }

  logOut() {
    this.store.dispatch(signOut());
  }

}
