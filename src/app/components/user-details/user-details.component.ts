import { Component } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Commande } from 'src/app/models/commande';
import { AuthService } from 'src/app/services/auth.service';
import { CommandesService } from 'src/app/services/commandes.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  
  commande: Commande[] = []

  
  constructor(private service:CommandesService, private auth: AuthService) {
    auth.currentUser.pipe(switchMap(user => {
      const id = user?.id;
      return service.findByUserId(id || 0)
    })).subscribe({
      next: reponse => this.commande = reponse
    })
  }
}
