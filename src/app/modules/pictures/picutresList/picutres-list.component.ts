import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Picture } from 'src/app/models';
import { PicturesService } from '../picture/picturesService/pictures.service';

@Component({
  selector: 'app-picutres-list',
  templateUrl: './picutres-list.component.html',
  styleUrls: ['./picutres-list.component.css']
})
export class PicutresListComponent implements OnInit {

  pictures: Picture[];
  filter: string = '';  
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  constructor(private activatedRoute: ActivatedRoute,
    private pictureService: PicturesService) { }

  ngOnInit(): void {
    this.getPictures();
  }

  getPictures(): void {
    this.activatedRoute.params
      .subscribe(res => {
        this.userName = res.userName;
        this.pictures = this.activatedRoute.snapshot.data.pictures;
      });
  }
  load() {
    this.pictureService
      .listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe(pictures => {
        this.filter = '';
        this.pictures = this.pictures.concat(pictures);
        if (!pictures.length) this.hasMore = false;
      });
  }
}
