import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {
    constructor(private loginForm: FormGroup) { }
    
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

}