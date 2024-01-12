import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mail: string = "";
  password: string = "";

  constructor(private router: Router, private service: AuthService) {
  }
  handleSubmit(valid: boolean) {
   if (valid) {
      this.service.login(this.mail, this.password)
        .subscribe(user =>
          {console.log(user)
          this.router.navigate(["/landing"])})
    }
  }
}
