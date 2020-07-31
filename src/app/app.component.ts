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
  signInDialog$: Observable<boolean>;

  constructor(private store: Store<{ signInDialog: boolean }>) {
    this.signInDialog$ = store.pipe(select('signInDialog'));
  }
}
