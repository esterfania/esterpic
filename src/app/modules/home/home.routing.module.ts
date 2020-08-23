import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { AuthGuard } from 'src/app/core/auth/auth.guard';
import { SigninComponent } from './signin/signin.component';
import { Signup } from './signup/signup.component';

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
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {

}