import { Component, OnInit } from '@angular/core';
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { signOut, openSignInDialog } from '../counter.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedIn$: Observable<Boolean>;

  faSignInAlt = faSignInAlt;
  faSignOutAlt = faSignOutAlt;

  constructor(private store: Store<{ loggedIn: Boolean }>) {
    this.loggedIn$ = store.pipe(select('loggedIn'));
   }

   displayButton:boolean;

  ngOnInit(): void {
  }

  logIn() {
    this.store.dispatch(openSignInDialog());
  }

  logOut() {
    this.store.dispatch(signOut());
  }

}
