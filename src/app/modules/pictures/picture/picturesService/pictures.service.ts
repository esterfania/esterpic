import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Picture } from 'src/app/models/index';
import { PictureComment } from 'src/app/models/picture-comment';

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

  findById(pictureId: number): Observable<Picture> {
    return this.http.get<Picture>(API + '/photos/' + pictureId);
  }

  getComments(pictureId: number) {
    return this.http.get<PictureComment[]>(
      API + '/photos/' + pictureId + '/comments');
  }

  addComments(pictureId: number, commentText: string) {
    return this.http.post(
      API + '/photos/' + pictureId + '/comments',
      { commentText });
  }

  removePicture(pictureId: number) {
    return this.http
      .delete(API + '/photos/' + pictureId);
  }
}
