import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ICategories } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CategoriesService {

	private _url: string = "http://localhost:5001/travel-app-9b55f/us-central1/getTags"

	constructor(private http: HttpClient) { }

	getCategories(): Observable<ICategories[]> {
		return this.http.get<ICategories[]>(this._url)
	}

}
