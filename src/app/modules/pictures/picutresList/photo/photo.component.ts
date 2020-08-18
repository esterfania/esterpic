import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Picture } from 'src/app/models';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnChanges {

  rows: any[] = [];
  @Input() photos: Picture[] = [];

  constructor() { }


  ngOnChanges(changes: SimpleChanges) {
    if (changes.photos.currentValue) {
      this.rows = this.groupColumns(this.photos);
    }
  }

  groupColumns(photos: Picture[]) {
    const newRows = [];

    for (let index = 0; index < photos.length; index += 3) {
      newRows.push(photos.slice(index, index + 3));
    }
    return newRows;
  }

}
