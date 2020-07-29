import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IPlaces, IDoc } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class PlaceService {

	private _url_getPlace: string = "http://localhost:5001/travel-app-9b55f/us-central1/getPlace?place="
	private _url_getUserPlace: string = "http://localhost:5001/travel-app-9b55f/us-central1/getUserPlace?"
	private _url_saveUserPlace: string = "http://localhost:5001/travel-app-9b55f/us-central1/saveUserPlace?place="

	constructor(private http: HttpClient) { }

	getPlace(placeSelected: string): Observable<IPlaces> {
		return this.http.get<IPlaces>(this._url_getPlace + placeSelected)
	}

	getUserPlace(userID: string, placeID: string ): Observable<IDoc> {
		return this.http.get<IDoc>(`${this._url_getUserPlace}uid=${userID}&pid=${placeID}`)
	}

	saveUserPlace(body: object): Observable<any> {
		return this.http.post<any>(this._url_saveUserPlace, body)
	}

}
