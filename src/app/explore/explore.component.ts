import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
  host: {'class': 'main'}
})
export class ExploreComponent implements OnInit {

  constructor() { }

  arrayOne(n: number): any[] {
    return Array(n);
  }

  ngOnInit(): void {
  }

}
