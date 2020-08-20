import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "src/app/core/auth.service";

@Component({
    templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {

    loginForm: FormGroup

    constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
    }

    login(): void {
        let user: User = {
            userName: this.loginForm.get('username').value,
            password: this.loginForm.get('password').value
        };

        this.authService
            .authenticate(user)
            .subscribe(res => console.log(res),
                err => {
                    console.log(err);
                    this.loginForm.reset()
                });
    }

}