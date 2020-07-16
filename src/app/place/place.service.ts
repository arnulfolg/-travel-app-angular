import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IPlaces } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class PlaceService {

	private _url: string = "http://localhost:5001/travel-app-9b55f/us-central1/getPlace?place="

	constructor(private http: HttpClient) { }

	getPlace(placeSelected): Observable<IPlaces> {
		return this.http.get<IPlaces>(this._url + placeSelected)
	}

}
