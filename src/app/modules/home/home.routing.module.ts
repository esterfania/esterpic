import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { LoginGuard } from 'src/app/core/auth/login.guard';
import { SigninComponent } from './signin/signin.component';
import { Signup } from './signup/signup.component';

const routes: Routes = [
  
    {
        path: '',
        component: HomeComponent,        
        canActivate: [LoginGuard],
        children: [{
            path: '',
            component: SigninComponent,
            data: {
                title: 'Sign in'
            }
        },
        {
            path: 'signup',
            component: Signup,
            data: {
                title: 'Sign out'
            }
        }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {

}