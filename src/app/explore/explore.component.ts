import { Component, OnInit } from '@angular/core';
import { ExploreService } from './explore.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
  host: {'class': 'main'}
})
export class ExploreComponent implements OnInit {

  public places = []

  constructor(private _placesService: ExploreService) { }

  ngOnInit(): void {
    this._placesService.getPlaces()
      .subscribe(data => {
        this.places = data
      })
  }

  arrayOne(n: number): any[] {
    return Array(n);
  }

}
