import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IPlaces } from './../places';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ExploreService {

	private _url: string = "http://localhost:5001/travel-app-9b55f/us-central1/getPlaces"

	constructor(private http: HttpClient) { }

	getPlaces(): Observable<IPlaces[]> {
		return this.http.get<IPlaces[]>(this._url)
	}

}
