import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './categories.service';
import { ICategories } from './../interfaces';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  host: {class: 'main'}
})
export class CategoriesComponent implements OnInit {

  public categories = [];

  constructor(private _categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this._categoriesService.getCategories()
      .subscribe(data => {
        this.categories = data;
      });
  }

}
