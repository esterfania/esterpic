import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { AuthService, PlatFormDetectorService } from "src/app/core/index";


@Component({
    templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {
    fromUrl = '';
    loginForm: FormGroup
    @ViewChild('userNameInput', { static: false }) userNameInput: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private route: Router,
        private platFormDetectorService: PlatFormDetectorService,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
        this.setFocus();

        this.activatedRoute.queryParams
            .subscribe(params => {
                this.fromUrl = params['fromUrl'];
            })
    }

    login(): void {

        const username = this.loginForm.get('username').value;
        const password = this.loginForm.get('password').value;

        this.authService
            .authenticate(username, password)
            .subscribe(
                res => {
                    if (this.fromUrl) {
                        this.route.navigateByUrl(this.fromUrl);
                    } else {
                        this.route.navigate(['user', username])
                    }
                },
                err => {
                    console.log(err);
                    this.loginForm.reset();
                    this.setFocus()
                });
    }

    setFocus(): void {
        this.platFormDetectorService.isPlatformBrowser() &&
            this.userNameInput.nativeElement.focus();
    }
}