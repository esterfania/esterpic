import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PictureDetailsComponent } from "./picture-details.component";
import { PictureModule } from "../picture/picture.module";
import { PictureCommentsComponent } from "./picture-comments/picture-comments.component";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { MessageModule } from "src/app/shared";

@NgModule({
    declarations: [
        PictureDetailsComponent,
        PictureCommentsComponent
    ],
    imports: [
        CommonModule,
        PictureModule,
        RouterModule,
        ReactiveFormsModule,
        MessageModule
    ],
    exports: [
        PictureDetailsComponent,
        PictureCommentsComponent
    ]
})
export class PictureDetailsModule { }