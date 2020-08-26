import { Component, Input } from '@angular/core';

import { environment } from '../../../../environments/environment'
const API = environment.apiUrl + '/imgs/';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent {

  _url: string = '';

  @Input() set url(url: string) {
    if (!url.startsWith('data')) {
      this._url = API + url;
    } else {
      this._url = url;
    }
  }

  get url() {
    return this._url;
  }

  @Input() description: string;

  constructor() { }




}
