import { Component, OnInit } from '@angular/core';
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
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {
  
  farThumbsUp = farThumbsUp;
  farThumbsDown = farThumbsDown;
  fasThumbsUp = fasThumbsUp;
  fasThumbsDown = fasThumbsDown;

  constructor() { }

  ngOnInit(): void {
  }

}
