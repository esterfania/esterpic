import { Component, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: 'app-signup',
    templateUrl: 'signup.component.html'
})
export class Signup {

    private form: FormGroup;

    @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

    constructor(private formBuilder: FormBuilder) {
        this.form = this.formBuilder.group({
            email: ['', [
                Validators.required,
                Validators.email]],
            name: ['', [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(40)
            ]],
            userName: ['', [
                Validators.required,
                Validators.pattern(/^[a-z0-9_\-]+$/),
                Validators.minLength(2),
                Validators.maxLength(30)]],
            password: ['', [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(14)]]
        })
    }

    create() {
        console.log(this.form)
        this.form.reset()
    }
}