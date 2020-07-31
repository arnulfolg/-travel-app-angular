import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  banenrImg$: Observable<string>;

  constructor(private store: Store<{ bannerImg: string }>) { }

  ngOnInit(): void {
    this.banenrImg$ = this.store.pipe(select('bannerImg'));
  }

}
