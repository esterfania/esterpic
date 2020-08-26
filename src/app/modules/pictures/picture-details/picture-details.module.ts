import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { PictureDetailsComponent } from "./picture-details.component";
import { PictureModule } from "../picture/picture.module";
import { PictureCommentsComponent } from "./picture-comments/picture-comments.component";
import { MessageModule } from "src/app/shared";
import { OwnerOnlyDirective } from "./owner-only/owner-only.directive";
import { ShowIfLoggedModule } from "src/app/shared/directives/show-if-logged/show-if-logged.module";

@NgModule({
    declarations: [
        PictureDetailsComponent,
        PictureCommentsComponent,
        OwnerOnlyDirective
    ],
    imports: [
        CommonModule,
        PictureModule,
        RouterModule,
        ReactiveFormsModule,
        MessageModule,
        ShowIfLoggedModule
    ],
    exports: [
        PictureDetailsComponent,
        PictureCommentsComponent
    ]
})
export class PictureDetailsModule { }