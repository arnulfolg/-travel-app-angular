import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from "@angular/forms";
import { IPlaces, IUser, IDoc } from "src/app/interfaces";
import { PlaceService } from "./place.service";
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { 
  faThumbsUp as farThumbsUp, 
  faThumbsDown as farThumbsDown 

} from '@fortawesome/free-regular-svg-icons';
import { 
  faThumbsUp as fasThumbsUp, 
  faThumbsDown as fasThumbsDown 

} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss'],
  host: {'class': 'main'}
})

export class PlaceComponent implements OnInit {

  likeForm : FormGroup;
	likeStatus: number = -1
  userData$: Observable<IUser>;

  farThumbsUp = farThumbsUp;
  farThumbsDown = farThumbsDown;
  fasThumbsUp = fasThumbsUp;
  fasThumbsDown = fasThumbsDown;

  public place : IPlaces
  public docid : string = null
  public userid : string = ""
  public placeid : string = ""

  constructor(private store: Store<{ userData: IUser }>, private _placeService : PlaceService, private route: ActivatedRoute, private _formBuilder : FormBuilder) {}

  ngOnInit(): void {
    this.userData$ = this.store.pipe(select('userData'))
      this.userData$.subscribe(user => this.userid = user.uid)
    let placeSelected = this.route.snapshot.params.place
    this._placeService.getPlace(placeSelected)
      .subscribe(data => {
        this.place = data
      })
    this.likeForm = this._formBuilder.group({
      wantToVisit: false,
      hadVisited: false
    })


    setTimeout(() => this.setDocID() , 1000)

  }

  setDocID(){
      this._placeService.getUserPlace(this.userid, this.place.id)
        .subscribe((data: IDoc) => {
          if(data != undefined) {
              this.docid = data.docid
              this.likeStatus = data.likeStatus
              this.likeForm = this._formBuilder.group({
                  wantToVisit: data.wantToVisit,
                  hadVisited: data.hadVisited
                })
          }
        })
  }

  toggleLike(): void {
			if (this.likeStatus == 1) {
				this.likeStatus = -1
			} else {
				this.likeStatus = 1
      }

      let body = {
				docid: this.docid || null,
				uid: this.userid,
				pid: this.place.id,
				likeStatus: this.likeStatus,
				wantToVisit: this.likeForm.get('wantToVisit').value,
				hadVisited: this.likeForm.get('hadVisited').value
			}

			this._placeService.saveUserPlace(body).subscribe()
  }

  toggleDisike(): void {
			if (this.likeStatus == 0) {
				this.likeStatus = -1
			} else {
				this.likeStatus = 0
      }

      let body = {
				docid: this.docid || null,
				uid: this.userid,
				pid: this.place.id,
				likeStatus: this.likeStatus,
				wantToVisit: this.likeForm.get('wantToVisit').value,
				hadVisited: this.likeForm.get('hadVisited').value
			}

			this._placeService.saveUserPlace(body).subscribe()
  }

}
