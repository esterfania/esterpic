import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { lowerCaseValidator } from "src/app/shared/validators/lowerCase.validator";
import { UserNotTakenValidatorService } from "./user-not-taken.validator.service";
import { NewUser } from "./new-user";
import { SignupService } from "./signup.service";
import { Router } from "@angular/router";
import { PlatFormDetectorService } from "src/app/core";
import { userNamePassword } from "./username-password.validator";

@Component({
    selector: 'app-signup',
    templateUrl: 'signup.component.html',
    providers: [UserNotTakenValidatorService]
})
export class Signup implements OnInit {

    signUpForm: FormGroup;

    @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private userNotTakenValidatorService: UserNotTakenValidatorService,
        private signupService: SignupService,
        private router: Router,
        private platformDetectorService: PlatFormDetectorService) { }

    ngOnInit(): void {
        this.signUpForm = this.formBuilder.group({
            email:
                [
                    '',
                    [
                        Validators.required,
                        Validators.email
                    ]
                ],
            fullName:
                [
                    '',
                    [
                        Validators.required,
                        Validators.minLength(2),
                        Validators.maxLength(40)
                    ]],
            userName:
                [
                    '',
                    [
                        Validators.required,
                        lowerCaseValidator,
                        Validators.minLength(2),
                        Validators.maxLength(30)
                    ],
                    this.userNotTakenValidatorService.checkUserNameTaken()
                ],
            password:
                [
                    '',
                    [
                        Validators.required,
                        Validators.minLength(8),
                        Validators.maxLength(14)
                    ]
                ]
        },
            {
                validator: userNamePassword
            }
        );
        this.setFocus();
    }

    signup() {
        if (this.signUpForm.valid && !this.signUpForm.pending) {
            const newUser = this.signUpForm.getRawValue() as NewUser;
            this.signupService
                .signup(newUser)
                .subscribe(
                    () => {
                        this.router.navigate(['']);
                    },
                    err => console.log(err)
                );
        }
    }
    setFocus(): void {
        this.platformDetectorService.isPlatformBrowser()
            && this.emailInput.nativeElement.focus();
    }
}