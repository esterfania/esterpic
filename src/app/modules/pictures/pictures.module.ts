import { NgModule } from '@angular/core';

import { PictureModule } from './picture/picture.module';
import { PicturesListModule } from './picutresList/pictures-list.module';
import { PicturesRoutingModule } from './pictures.routing.module';
import { PicturesFormModule } from './picturesForm/pictures-form.module';
import { PictureDetailsModule } from './picture-details/picture-details.module';

@NgModule({
  imports: [
    PictureModule,
    PicturesListModule,
    PicturesFormModule,
    PicturesRoutingModule,
    PictureDetailsModule
  ]
})
export class PicturesModule { }
