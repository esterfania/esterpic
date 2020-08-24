import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PicturesFormComponent } from './modules/pictures/picturesForm/pictures-form.component';
import { AuthGuard } from './core/auth/auth.guard';


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
        canActivate:[AuthGuard],
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