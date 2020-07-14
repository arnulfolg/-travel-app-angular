import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  host: {'class': 'main'}
})
export class CategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
