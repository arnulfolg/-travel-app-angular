import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {'class': 'main'}
})
export class HomeComponent implements OnInit {

  featuredPlaces

  constructor(private _homeService: HomeService) { }

  ngOnInit(): void {
    this._homeService.getFeaturedPlaces()
      .subscribe(data => {
        this.featuredPlaces = data
      })
  }

}
