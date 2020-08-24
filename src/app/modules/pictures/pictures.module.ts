import { NgModule } from '@angular/core';

import { PictureModule } from './picture/picture.module';
import { PicturesListModule } from './picutresList/pictures-list.module';
import { PicturesRoutingModule } from './pictures.routing.module';

@NgModule({
  imports: [
    PictureModule,
    PicturesListModule,    
    PicturesRoutingModule
  ]
})
export class PicturesModule { }
