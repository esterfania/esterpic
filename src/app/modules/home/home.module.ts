import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

import { SigninComponent } from "./signin/signin.component";
import { MessageModule } from "src/app/shared";
import { RouterModule } from "@angular/router";
import { Signup } from "./signup/signup.component";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home.routing.module";
import { SignupService } from "./signup/signup.service";

@NgModule({
    declarations: [
        SigninComponent,
        Signup,
        HomeComponent
    ],
    imports: [
        MessageModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        HomeRoutingModule
    ],
    providers: [SignupService]
})
export class HomeModule {

}