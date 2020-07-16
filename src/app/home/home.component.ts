import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { IPlaces } from "./../interfaces";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {'class': 'main'}
})
export class HomeComponent implements OnInit {

  public featuredPlaces: IPlaces[] = []

  constructor(private _homeService: HomeService) { }

  ngOnInit(): void {
    this._homeService.getFeaturedPlaces()
      .subscribe(data => {
        this.featuredPlaces = data
      })
  }

}
