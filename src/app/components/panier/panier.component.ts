import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { Article } from 'src/app/models/article';
import { Commande } from 'src/app/models/commande';
import { Panier } from 'src/app/models/panier';
import { AuthService } from 'src/app/services/auth.service';
import { CommandesService } from 'src/app/services/commandes.service';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {
  
  panier: Observable<Panier>;
  id: number = 0

  constructor(private service: PanierService, private auth: AuthService, private commandeService: CommandesService, private router: Router) {
    this.panier = auth.currentUser.pipe(switchMap(user => {
      this.id = user?.id  || 0;
      return service.findByUserId(this.id)
    }))
  }

  valid() {
    this.panier.pipe(
      switchMap(p => {
      const commande : Commande = {
        id: 0,
        date: new Date(),
        panier: p,
        userId: this.id
      }
      return this.commandeService.valid(commande)}),
      switchMap(({panier}) => {
        return this.service.vider(panier.id)
      })
      )
    .subscribe({
      next: () => this.router.navigate(["/landing"])
    })
    
  }
}
