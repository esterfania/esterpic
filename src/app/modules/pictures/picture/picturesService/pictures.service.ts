import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Picture } from 'src/app/models/index';

const API = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class PicturesService {

  constructor(private http: HttpClient) { }


  listFromUser(userName: string): Observable<Picture[]> {

    return this.http
      .get<Picture[]>(API + '/' + userName + '/photos');

  }

  listFromUserPaginated(userName: string, page: number): Observable<Picture[]> {
    const params = new HttpParams()
      .append('page', page.toString());

    return this.http
      .get<Picture[]>(API + '/' + userName + '/photos', { params })
  }

  upload(description: string, allowComments: boolean, file: File) {

    const formData = new FormData();
    formData.append('description', description);
    formData.append('allowComments', allowComments ? 'true' : 'false');
    formData.append('imageFile', file);

    return this.http
      .post(API + '/photos/upload', formData);
  }

  findById(id: string): Observable<Picture> {
    return this.http.get<Picture>(API + '/photos/'+ id);
  }
}
