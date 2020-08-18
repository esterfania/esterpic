import { NgModule } from "@angular/core";
import {ReactiveFormsModule} from '@angular/forms';

import { SigninComponent } from "./signin/signin.component";

@NgModule({
    declarations: [SigninComponent],
    imports: [ReactiveFormsModule]
})
export class HomeModule {

}