import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";

import { PicturesService } from "../picture/picturesService/pictures.service";
import { Picture } from "src/app/models";
import { AlertService } from "src/app/shared/components/alert/alert.service";
import { UserService } from "src/app/core/user/user.service";

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
        private alertService: AlertService,
        private userService: UserService) { }

    ngOnInit(): void {
        this.pictureId = this.activatedRoute.snapshot.params.pictureId;
        this.pictures$ = this.pictureService.findById(this.pictureId);
        this.pictures$
        .subscribe(()=>{},
        err => this.router.navigate(['not-found']))
    }
    remove() {
        this.pictureService
            .removePicture(this.pictureId)
            .subscribe(
                () => {
                    this.alertService.success('Picture removed', true);
                    this.router.navigate(['/user', this.userService.getUserName()])
                },
                err => {
                    this.alertService.danger('An error occurred, please try again later!')
                    console.log(err)
                }
            )
    }
}
