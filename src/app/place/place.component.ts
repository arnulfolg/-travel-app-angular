import { Component, OnInit } from '@angular/core';
import { 
  faThumbsUp as farThumbsUp, 
  faThumbsDown as farThumbsDown 

} from '@fortawesome/free-regular-svg-icons';
import { 
  faThumbsUp as fasThumbsUp, 
  faThumbsDown as fasThumbsDown 

} from '@fortawesome/free-solid-svg-icons';
import { PlaceService } from "./place.service";
import { IPlaces } from "src/app/interfaces";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss'],
  host: {'class': 'main'}
})
export class PlaceComponent implements OnInit {

  farThumbsUp = farThumbsUp;
  farThumbsDown = farThumbsDown;
  fasThumbsUp = fasThumbsUp;
  fasThumbsDown = fasThumbsDown;

  userPlaceData = {
				likeStatus: -1,
				wantToVisit: false,
				hadVisited: false
      }
      
  public place : IPlaces

  constructor(private _placeService : PlaceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let placeSelected = this.route.snapshot.params.place
    this._placeService.getPlace(placeSelected)
      .subscribe(data => {
        this.place = data
      })
  }

  toggleLike(): void {
			if (this.userPlaceData.likeStatus == 1) {
				this.userPlaceData.likeStatus = -1
			} else {
				this.userPlaceData.likeStatus = 1
      }
  }

  toggleDisike(): void {
			if (this.userPlaceData.likeStatus == 0) {
				this.userPlaceData.likeStatus = -1
			} else {
				this.userPlaceData.likeStatus = 0
			}
  }

}
