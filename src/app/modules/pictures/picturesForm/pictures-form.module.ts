import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PicturesFormComponent } from "./pictures-form.component";
import { MessageModule } from 'src/app/shared';
import { PictureModule } from '../picture/picture.module';

@NgModule({
    declarations: [PicturesFormComponent],
    imports: [
        CommonModule,
        MessageModule,
        ReactiveFormsModule,       
        FormsModule,
        PictureModule,
        RouterModule
    ]
})
export class PicturesFormModule { }