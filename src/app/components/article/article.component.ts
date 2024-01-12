import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { AuthService } from 'src/app/services/auth.service';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

  @Input() // Prépare à recevoir une variable (attribut)
  article?: Article;

  constructor(private service:AuthService, private router: Router, private panierService: PanierService){
    
  }

  addPanier(): void{
    this.service.currentUser.subscribe({
      next: user => {
        if(user) {
          if(this.article) this.panierService.addPanier(user.id, this.article).subscribe()

        } else {
          this.router.navigate(["/login"])
        }
      }
    })
  }

}
