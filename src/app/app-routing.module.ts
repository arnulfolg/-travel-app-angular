import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExploreComponent } from './explore/explore.component'
import { HomeComponent } from './home/home.component'
import { CategoriesComponent } from './categories/categories.component'
import { CategoryComponent } from './category/category.component'
import { PlaceComponent } from './place/place.component'
import { BannerComponent } from './banner/banner.component'
import { MyPlacesComponent } from './my-places/my-places.component'


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'places', component: ExploreComponent},
  { path: 'places/:place', children: [
        {
            path: '',
            component: PlaceComponent
          },
          {
            path: '',
            outlet: 'banner',
            component: BannerComponent
          }
  ] },
  { path: 'categories', component: CategoriesComponent},
  { path: 'categories/:category', component: CategoryComponent},
  { path: 'myplaces', component: MyPlacesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
