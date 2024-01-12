import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserForm } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { PanierService } from 'src/app/services/panier.service';
import { getFormControl, hasError, isInvalid, mustMatch } from 'src/app/tool/reactive-form-tool';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  password: FormControl = new FormControl('', [Validators.required, Validators.minLength(8)])
  confirmPassword: FormControl = new FormControl('', [Validators.required, mustMatch(this.password)])
  form : FormGroup = new FormGroup<UserForm>({
    nom:   new FormControl('', [Validators.required]),
    email:      new FormControl('', [Validators.required, Validators.email]),
    password:   this.password,
  })

  constructor(private router: Router, private service:AuthService, private panierService: PanierService){
  }

  handleSubmit() {
    // Toujours en premier
    if(this.form.valid) {
      this.service.register(this.form.value).subscribe({
        next: response => {
          this.panierService.create(response.user.id).subscribe()
          this.router.navigate(["/login"])
        }
      });
    }
  }

  getControl(name: string) {
    return getFormControl(this.form, name)
  }

  isInvalid(name: string) {
    return isInvalid(this.getControl(name))
  }

  hasError(name: string, errorCode: string) {
    return hasError(this.getControl(name), errorCode)
  }

  
}
