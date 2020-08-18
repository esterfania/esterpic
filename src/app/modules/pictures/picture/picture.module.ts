import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

import { PictureComponent } from "./picture.component";

@NgModule({
    imports: [CommonModule, HttpClientModule],
    declarations: [PictureComponent],
    exports: [PictureComponent]
})
export class PictureModule { }