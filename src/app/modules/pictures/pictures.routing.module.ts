import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PicutresListComponent } from './picutresList/picutres-list.component';
import { PicturesListResolver } from './picutresList/resolver/pictures-list-resolver.resolver';
import { PicturesFormComponent } from './picturesForm/pictures-form.component';
import { AuthGuard } from 'src/app/core/auth/auth.guard';
import { PictureDetailsComponent } from './picture-details/picture-details.component';


const routes: Routes = [
    {
        path: '',
        component: PicutresListComponent,
        resolve: {
            pictures: PicturesListResolver
        }        
    },       
    {
        path: 'p/add',
        canActivate: [AuthGuard],
        component: PicturesFormComponent
    },
    {
        path: 'p/:pictureId',
        component: PictureDetailsComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PicturesRoutingModule {

}