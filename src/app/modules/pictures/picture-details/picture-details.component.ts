import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";

import { PicturesService } from "../picture/picturesService/pictures.service";
import { Picture } from "src/app/models";

@Component({
    templateUrl: './picture-details.component.html'
})
export class PictureDetailsComponent implements OnInit {

    pictures$: Observable<Picture>;
    pictureId: number;
    constructor(
        private activatedRoute: ActivatedRoute,
        private pictureService: PicturesService,
        private router: Router) { }

    ngOnInit(): void {
        this.pictureId = this.activatedRoute.snapshot.params.pictureId;
        this.pictures$ = this.pictureService.findById(this.pictureId);
    }
    remove() {
        this.pictureService
            .removePicture(this.pictureId)
            .subscribe(
                () => this.router.navigate(['']),
                err => console.log(err)
            )
    }
}
