import { NgModule } from '@angular/core';

import { PictureModule } from './picture/picture.module';
import { PicturesFormModule } from './picturesForm/pictures-form.module';
import { PicturesListModule } from './picutresList/pictures-list.module';
import { PicturesRoutingModule } from './pictures.routing.module';

@NgModule({
  imports: [
    PictureModule,
    PicturesListModule,    
    PicturesFormModule,
    PicturesRoutingModule
  ]
})
export class PicturesModule { }
