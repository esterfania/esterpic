import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Picture } from 'src/app/models/index';

@Injectable({
  providedIn: 'root'
})
export class PicturesService {

  constructor(private http: HttpClient) { }

  urlBase = 'http://localhost:3000';

  listFromUser(userName: string): Observable<Picture[]> {

    return this.http.get<Picture[]>(this.urlBase + '/' + userName + '/photos');

  }

  listFromUserPaginated(userName: string, page: number): Observable<Picture[]> {
    const params = new HttpParams()
      .append('page', page.toString());
    return this.http.get<Picture[]>(this.urlBase + '/' + userName + '/photos', { params })
  }

}
