import { Component, OnInit, Input } from '@angular/core';

const URL = 'http://localhost:3000/imgs/';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {

  _url: string = '';

  @Input() set url(url: string) {
    if (!url.startsWith('data')) {
      this._url = URL + url;
    } else {
      this._url = url;
    }
  }

  get url() {
    return this._url;
  }

  @Input() description: string;

  constructor() { }


  ngOnInit() {
  }

}
