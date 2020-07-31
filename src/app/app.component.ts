import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'travel-app-angular';
  signInDialog$: Observable<Boolean>;

  constructor(private store: Store<{ signInDialog: Boolean }>) {
    this.signInDialog$ = store.pipe(select('signInDialog'));
  }

  LoginEvent() {
    console.log('app com - login event');
  }
}
