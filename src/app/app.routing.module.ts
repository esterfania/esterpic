import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


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