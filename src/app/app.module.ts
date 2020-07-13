import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { CategoriesComponent } from './categories/categories.component';
import { MyPlacesComponent } from './my-places/my-places.component';
import { PlaceCardComponent } from './place-card/place-card.component';
import { CategoryCardComponent } from './category-card/category-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ExploreComponent,
    CategoriesComponent,
    MyPlacesComponent,
    PlaceCardComponent,
    CategoryCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
