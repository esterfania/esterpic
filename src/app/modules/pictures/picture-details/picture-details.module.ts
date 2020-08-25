import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PictureDetailsComponent } from "./picture-details.component";

@NgModule({
    declarations: [PictureDetailsComponent],
    imports: [CommonModule],
    exports:[PictureDetailsComponent]
})
export class PictureDetailsModule { }