import { AbstractControl } from '@angular/forms';


// Validation for Password and Confirm Password (Password mismatch)
export class ConfirmPasswordValidator {
    static MatchPassword(control: AbstractControl) {
        let password = control.get('password').value;
        let confirmPassword = control.get('confirmPassword').value;
        if (password != confirmPassword) {
            control.get('confirmPassword').setErrors({ ConfirmPassword: true });
        }
        else {
            return null;
        }
    }
}

// Validation for Range/Age 
export function ageRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value !== undefined && (isNaN(control.value) || control.value < 18 || control.value > 45)) {
        return { 'ageRange': true };
    }
    return null;
}

