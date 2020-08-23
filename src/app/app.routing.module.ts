import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PicutresListComponent } from '../app/modules/pictures/picutresList/picutres-list.component';
import { PicturesFormComponent } from './modules/pictures/picturesForm/pictures-form.component';
import { NotFoundComponent } from './modules/errors/not-found/not-found.component';
import { PicturesListResolver } from './modules/pictures/picutresList/resolver/pictures-list-resolver.resolver';
import { SigninComponent } from './modules/home/signin/signin.component';
import { AuthGuard } from './core/auth/auth.guard';
import { Signup } from './modules/home/signup/signup.component';
import { HomeComponent } from './modules/home/home.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,        
        canActivate: [AuthGuard],
        children: [{
            path: '',
            component: SigninComponent
        },
        {
            path: 'signup',
            component: Signup
        }]
    },
    {
        path: 'user/:userName',
        component: PicutresListComponent,
        resolve: {
            pictures: PicturesListResolver
        }
    },
    {
        path: 'p/add',
        component: PicturesFormComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}