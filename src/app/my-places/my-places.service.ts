import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPlaces } from '../interfaces';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class MyPlacesService {

	private _url_getMyPlaces: string = environment.apiUrl + 'getMyPlaces?uid=';

	constructor(private http: HttpClient) { }

	getMyPlaces(userId: string): Observable<IPlaces[]> {
		return this.http.get<IPlaces[]>(this._url_getMyPlaces + userId);
	}

}
