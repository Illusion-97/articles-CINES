import { Component } from '@angular/core';
import {Observable, map} from "rxjs";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth-menu',
  templateUrl: './auth-menu.component.html',
  styleUrls: ['./auth-menu.component.css']
})
export class AuthMenuComponent {
  close: boolean = true;
  isLogged : Observable<boolean>
  name: Observable<string>

  constructor(private service: AuthService, router: Router) {
    this.isLogged = this.service.isLogged();
    this.name = service.currentUser.pipe(map(user => user?.nom || 'Anonyme'))
    router.events.subscribe(() => this.close= true)
  }

  logout() {
    this.service.logout();
  }
}
