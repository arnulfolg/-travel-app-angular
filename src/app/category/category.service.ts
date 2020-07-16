import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IPlaces, ICategories } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CategoryService {

	private _url_Tag: string = "http://localhost:5001/travel-app-9b55f/us-central1/getTag?tag="
	private _url_Places: string = "http://localhost:5001/travel-app-9b55f/us-central1/getTagPlaces?tag="

	constructor(private http: HttpClient) { }

	getCategoryInfo(categorySelected: string): Observable<ICategories> {
		return this.http.get<ICategories>(this._url_Tag + categorySelected)
	}

	getCategoryPlaces(categorySelected: string): Observable<IPlaces[]> {
		return this.http.get<IPlaces[]>(this._url_Places+ categorySelected)
	}

}
