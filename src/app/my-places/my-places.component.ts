import { Component, OnInit } from '@angular/core';
import { IPlaces, IUser } from 'src/app/interfaces';
import { MyPlacesService } from './my-places.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-places',
  templateUrl: './my-places.component.html',
  styleUrls: ['./my-places.component.scss'],
  host: {class: 'main'}
})
export class MyPlacesComponent implements OnInit {

  userData$: Observable<IUser>;
  public userid = '';
  public userPlaces: IPlaces[];

  constructor(private store: Store<{ userData: IUser }>, private _myPlacesService: MyPlacesService) { }

  ngOnInit(): void {
    this.userData$ = this.store.pipe(select('userData'));
    this.userData$.subscribe(user => this.userid = user.uid);

    setTimeout(() => this.getUserPlaces() , 1000);
  }

  getUserPlaces() {
    this._myPlacesService.getMyPlaces(this.userid)
      .subscribe(data => {
        this.userPlaces = data;
      });
  }

}
