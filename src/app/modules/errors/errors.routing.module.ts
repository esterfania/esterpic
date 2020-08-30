import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { GlobalErrorComponent } from './global-error/global-error.component';

const routes: Routes = [

    {
        path: 'not-found',
        component: NotFoundComponent,
        data: {
            title: 'Not found'
        }

    },
    {
        path: 'error',
        component: GlobalErrorComponent,
        data: {
            title: 'error'
        }
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ErrorsRoutingModule {

}