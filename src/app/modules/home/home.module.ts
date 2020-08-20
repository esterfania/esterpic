import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

import { SigninComponent } from "./signin/signin.component";
import { MessageModule } from "src/app/shared";

@NgModule({
    declarations: [SigninComponent],
    imports: [
        MessageModule,
        CommonModule,
        ReactiveFormsModule,
    ]
})
export class HomeModule {

}