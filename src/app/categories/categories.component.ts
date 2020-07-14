import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  host: {'class': 'main'}
})
export class CategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
