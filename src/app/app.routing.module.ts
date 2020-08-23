import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PicturesFormComponent } from './modules/pictures/picturesForm/pictures-form.component';


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path:'home',
        loadChildren: './modules/home/home.module#HomeModule'
    },
    {
        path: 'user/:userName',      
        loadChildren: './modules/pictures/pictures.module#PicturesModule'
    },
    {
        path: 'p/add',      
        component: PicturesFormComponent
    },
    {
        path: '**',
        loadChildren: './modules/errors/errors.module#ErrorsModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}