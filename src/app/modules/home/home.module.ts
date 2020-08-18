import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

import { SigninComponent } from "./signin/signin.component";

@NgModule({
    declarations: [SigninComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule]
})
export class HomeModule {

}