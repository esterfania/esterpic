import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService, PlatFormDetectorService } from "src/app/core/index";


@Component({
    templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {

    loginForm: FormGroup
    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private route: Router,
        private platFormDetectorService: PlatFormDetectorService) { }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
    }

    login(): void {

        const username = this.loginForm.get('username').value;
        const password = this.loginForm.get('password').value;

        this.authService
            .authenticate(username, password)
            .subscribe(
                res => this.route.navigate(['user', username]),
                err => {
                    console.log(err);
                    this.loginForm.reset();
                    this.platFormDetectorService.isPlatformBrowser() &&
                        this.userNameInput.nativeElement.focus();
                });
    }
}