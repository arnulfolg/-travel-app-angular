import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICategories } from '../interfaces';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CategoriesService {

    private _url: string = environment.apiUrl + 'getTags';

    constructor(private http: HttpClient) { }

    getCategories(): Observable<ICategories[]> {
        return this.http.get<ICategories[]>(this._url);
    }

}
