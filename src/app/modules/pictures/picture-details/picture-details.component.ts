import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PicturesService } from "../picture/picturesService/pictures.service";
import { Picture } from "src/app/models";
import { Observable } from "rxjs";

@Component({
    templateUrl: './picture-details.component.html',
    styleUrls: ['./picture-details.component.css']
})
export class PictureDetailsComponent implements OnInit {

    pictures$: Observable<Picture>;

    constructor(
        private activatedRoute: ActivatedRoute,
        private pictureService: PicturesService) { }

    ngOnInit(): void {
        const id = this.activatedRoute.snapshot.params.pictureId;
        this.pictures$ = this.pictureService.findById(id);
    }

}
