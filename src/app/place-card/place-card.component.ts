import { Component, OnInit, Input } from '@angular/core';
import { IPlaces } from 'src/app/places';

@Component({
  selector: 'app-place-card',
  templateUrl: './place-card.component.html',
  styleUrls: ['./place-card.component.scss']
})
export class PlaceCardComponent implements OnInit {

  @Input() place : IPlaces

  constructor() { }

  ngOnInit(): void {
  }

}
