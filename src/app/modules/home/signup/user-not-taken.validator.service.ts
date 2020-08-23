import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { debounceTime, switchMap, map, first, tap } from 'rxjs/operators';

import { SignupService } from "./signup.service";

@Injectable()
export class UserNotTakenValidatorService {

    constructor(private signupService: SignupService) { }

    checkUserNameTaken() {

        return (control: AbstractControl) => {
            return control
                .valueChanges
                .pipe(debounceTime(300))
                .pipe(
                    switchMap(username =>
                        this.signupService.checkUserNameTaken(username)
                    ))
                .pipe(
                    map(isTaken =>
                        isTaken ? { userNameTaken: true } : null))
                .pipe(tap(r => console.log(r)))
                .pipe(first());
        }
    }
}