import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPlaces } from '../interfaces';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    private _url: string = environment.apiUrl + 'getFeaturedPlaces';

    constructor(private http: HttpClient) { }

    getFeaturedPlaces(): Observable<IPlaces[]> {
        return this.http.get<IPlaces[]>(this._url);
    }

}
