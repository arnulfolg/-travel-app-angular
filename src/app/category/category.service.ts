import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPlaces, ICategories } from '../interfaces';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    private _url_Tag: string = environment.apiUrl + 'getTag?tag=';
    private _url_Places: string = environment.apiUrl + 'getTagPlaces?tag=';

    constructor(private http: HttpClient) { }

    getCategoryInfo(categorySelected: string): Observable<ICategories> {
        return this.http.get<ICategories>(this._url_Tag + categorySelected);
    }

    getCategoryPlaces(categorySelected: string): Observable<IPlaces[]> {
        return this.http.get<IPlaces[]>(this._url_Places + categorySelected);
    }

}
