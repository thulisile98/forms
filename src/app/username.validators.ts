import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {

    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {

        if ((control.value as string).indexOf(' ') >= 0) {
            return { cannotContainSpace: true };

        }
        return null;

    }

    static cannotContainCharacter(control: AbstractControl): ValidationErrors | null {

        if ((control.value as string).indexOf('@') >= 0) {
            return { cannotContainCharacter: true };

        }
        return null;

    }



}