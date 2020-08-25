import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";

import { PicturesService } from "../picture/picturesService/pictures.service";
import { Picture } from "src/app/models";
import { AlertService } from "src/app/shared/components/alert/alert.service";

@Component({
    templateUrl: './picture-details.component.html'
})
export class PictureDetailsComponent implements OnInit {

    pictures$: Observable<Picture>;
    pictureId: number;
    constructor(
        private activatedRoute: ActivatedRoute,
        private pictureService: PicturesService,
        private router: Router,
        private alertService: AlertService) { }

    ngOnInit(): void {
        this.pictureId = this.activatedRoute.snapshot.params.pictureId;
        this.pictures$ = this.pictureService.findById(this.pictureId);
    }
    remove() {
        this.pictureService
            .removePicture(this.pictureId)
            .subscribe(
                () => {
                    this.alertService.succes('Picture removed');
                    this.router.navigate([''])
                },
                err => {
                    this.alertService.succes('Could not delete the photo!');
                    console.log(err)
                }
            )
    }
}
