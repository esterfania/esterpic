import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Picture } from 'src/app/models';
import { PicturesService } from '../picture/picturesService/pictures.service';

@Component({
  selector: 'app-picutres-list',
  templateUrl: './picutres-list.component.html',
  styleUrls: ['./picutres-list.component.css']
})
export class PicutresListComponent implements OnInit, OnDestroy {

  pictures: Picture[];
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  constructor(private activatedRoute: ActivatedRoute,
    private pictureService: PicturesService) { }

  ngOnInit(): void {
    this.getPictures();
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  getPictures(): void {
    this.activatedRoute.params
      .subscribe(res => {
        this.userName = res.userName;
        this.pictures = this.activatedRoute.snapshot.data.pictures;
      });

    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.filter = filter);

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
