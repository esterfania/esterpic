import { AbstractControl } from "@angular/forms";

export function lowerCaseValidator(control: AbstractControl) {

    if (control.value.trim() && !/^[a-z0-9_\-]+$/.test(control.value)) {
        return { lowercase: true }
    }

    return null;
}
export function isLowerCase(value: string) {
    return value.trim() && /^[a-z0-9_\-]+$/.test(value);
}
