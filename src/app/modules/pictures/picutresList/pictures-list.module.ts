import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PictureModule } from "../picture/picture.module";
import { PhotoComponent } from "./photo/photo.component";
import { LoadButtonComponent } from "./load-button/load-button.component";
import { FilterByDescription } from "./pipes/filter-by-description.pipe";
import { PicutresListComponent } from "./picutres-list.component";
import { SearchComponent } from "./search/search.component";
import { CardModule, DarkOnHoverModule } from "src/app/shared";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        PicutresListComponent,
        PhotoComponent,
        LoadButtonComponent,
        FilterByDescription,
        SearchComponent
    ],
    imports:
        [
            CommonModule,
            PictureModule,
            CardModule,
            DarkOnHoverModule,
            RouterModule
        ]
})
export class PicturesListModule { }