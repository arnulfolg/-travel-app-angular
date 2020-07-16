import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  place = {
    image: "https://sanmiguelwritersconference.org/wp-content/uploads/2011/07/8848894_orig-300x200.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
