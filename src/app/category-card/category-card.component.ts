import { Component, OnInit, Input } from '@angular/core';
import { ICategories } from "src/app/interfaces";

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {

  @Input() category : ICategories

  constructor() { }

  ngOnInit(): void {
  }

}
