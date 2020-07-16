import { Component, OnInit } from '@angular/core';
import { CategoryService } from "./category.service";
import { IPlaces, ICategories } from "src/app/interfaces";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  host: {'class': 'main'}
})
export class CategoryComponent implements OnInit {

  public categoryInfo : ICategories
  public categoryPlaces : IPlaces[] = []

  constructor(private _categoryService: CategoryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let categorySelected = this.route.snapshot.params.category
    this.route.queryParams.subscribe(params => {
    });
    this._categoryService.getCategoryInfo(categorySelected)
      .subscribe(data => {
        this.categoryInfo = data
      })
    this._categoryService.getCategoryPlaces(categorySelected)
      .subscribe(data => {
        this.categoryPlaces = data
      })
  }

}
