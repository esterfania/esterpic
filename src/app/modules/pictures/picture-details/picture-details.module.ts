import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PictureDetailsComponent } from "./picture-details.component";
import { PictureModule } from "../picture/picture.module";

@NgModule({
    declarations: [PictureDetailsComponent],
    imports: [CommonModule, PictureModule],
    exports:[PictureDetailsComponent]
})
export class PictureDetailsModule { }