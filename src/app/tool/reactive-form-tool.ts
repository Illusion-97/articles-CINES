import {AbstractControl, FormGroup, ValidationErrors, ValidatorFn} from "@angular/forms";

export function getFormControl(form: FormGroup, controlName: string): AbstractControl | undefined {
  // récupérer un FormControl contenu dans un FormGroup à partir de son nom
  return form.controls[controlName];
}

export function isInvalid(control: AbstractControl | undefined) {
  // pour savoir si un control est actuellement invalide
  return control?.invalid && control?.touched
}

export function hasError(control: AbstractControl | undefined, errorCode: string) {
  return control?.dirty && control?.hasError(errorCode)
}

export function mustMatch(matchingControl: AbstractControl) : ValidatorFn {
  return (control: AbstractControl) : ValidationErrors | null => {
    return control.value !== matchingControl.value // condition de validation
      ? { // Objet de type ValidationErrors
        mustmatch: { // errorCode : {value: errorValue}
          value : control.value
        }
    }
      : null
  }
}
