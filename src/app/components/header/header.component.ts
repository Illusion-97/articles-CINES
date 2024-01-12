import { Component } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  dark: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    this.dark.next(document.documentElement.classList.contains("dark") || window.matchMedia('(prefers-color-scheme: dark)').matches)
    this.dark.subscribe(darkMode => {
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark')
      }
    })
  }

}
