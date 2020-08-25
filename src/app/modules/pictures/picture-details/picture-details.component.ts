import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: './picture-details.component.html'
})
export class PictureDetailsComponent implements OnInit {

    constructor(activatedRoute: ActivatedRoute) { 
        console.log(activatedRoute.snapshot.params.pictureId)
    }
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
}
