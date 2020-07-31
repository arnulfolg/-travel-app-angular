import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPlaces } from '../interfaces';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class ExploreService {

	private _url: string = environment.apiUrl + 'getPlaces';

	constructor(private http: HttpClient) { }

	getPlaces(): Observable<IPlaces[]> {
		return this.http.get<IPlaces[]>(this._url);
	}

}
