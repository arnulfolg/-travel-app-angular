import { Component, OnInit } from '@angular/core';
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, signIn, signOut } from '../counter.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  count$: Observable<number>;
  loggedIn$: Observable<Boolean>;

  faSignInAlt = faSignInAlt;
  faSignOutAlt = faSignOutAlt;

  constructor(private store: Store<{ count: number, loggedIn: Boolean }>) {
    this.count$ = store.pipe(select('count'));
    this.loggedIn$ = store.pipe(select('loggedIn'));
   }

  ngOnInit(): void {
  }

  logIn() {
    this.store.dispatch(increment());
    this.store.dispatch(signIn());
  }

  logOut() {
    this.store.dispatch(signOut());
  }

}
