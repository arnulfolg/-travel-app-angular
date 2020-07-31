import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';

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
import { CategoryComponent } from './category/category.component';
import { PlaceComponent } from './place/place.component';
import { BannerComponent } from './banner/banner.component';

import { StoreModule } from '@ngrx/store';
import { loggedInReducer, signInDialogReducer, updateUserDataReducer, bannerImageReducer } from './store/counter.reducer';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ExploreComponent,
    CategoriesComponent,
    MyPlacesComponent,
    PlaceCardComponent,
    CategoryCardComponent,
    CategoryComponent,
    PlaceComponent,
    BannerComponent,
    AuthDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    StoreModule.forRoot({
      loggedIn: loggedInReducer,
      signInDialog: signInDialogReducer,
      userData: updateUserDataReducer,
      bannerImg: bannerImageReducer
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
