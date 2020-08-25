import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";
import { switchMap, tap } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { PicturesService } from "../../picture/picturesService/pictures.service";
import { PictureComment } from "src/app/models";

@Component({
    selector: 'app-picture-comments',
    templateUrl: './picture-comments.component.html'
})
export class PictureCommentsComponent implements OnInit {

    @Input() pictureId: number;
    comments$: Observable<PictureComment[]>;
    form: FormGroup;

    constructor(
        private pictureService: PicturesService,
        private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.comments$ = this.pictureService.getComments(this.pictureId);
        this.form = this.formBuilder
            .group({
                comment: ['', [Validators.required, Validators.maxLength(300)]]
            });
    }

    save() {
        const comment = this.form.get('comment').value as string;
        this.comments$ = this.pictureService
            .addComments(this.pictureId, comment)
            .pipe(switchMap(() => this.pictureService.getComments(this.pictureId)))
            .pipe(tap(() => this.form.reset()))
    }

   
}