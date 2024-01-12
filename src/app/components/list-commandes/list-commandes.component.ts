import { Component, Input } from '@angular/core';
import { Commande } from 'src/app/models/commande';

@Component({
  selector: 'app-list-commandes',
  templateUrl: './list-commandes.component.html',
  styleUrls: ['./list-commandes.component.css']
})
export class ListCommandesComponent {


  @Input()
  commandes: Commande[] = [];

  getPrice(commande: Commande) {
    return commande.panier.articles.map(article => article.prix).reduce((a,b)=> a+b,0)
  }
}
