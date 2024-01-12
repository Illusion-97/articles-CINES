import { Injectable } from '@angular/core';
import { Panier } from '../models/panier';
import { Observable, map, of, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  API_URL = "http://localhost:3000";

  paniers: Panier[] = [
    {
      id:1,
      userId: 1,
      articles: [{
        id: 1,
        nom: "test2",
        description: "no",
        prix: 89,
        image: ""
      }]
      
    },
  ]
  constructor(private http: HttpClient) { }

  create(idUser: number): Observable<Panier>{
    return this.http.post<Panier>(`${this.API_URL}/paniers`, {
      userId: idUser,
      articles: []
    })
  }

  findByUserId(id: number): Observable<Panier> {
    return this.http.get<Panier[]>(`${this.API_URL}/paniers?userId=${id}`).pipe(map(paniers => paniers[0]))
  }

  addPanier(idUser: number, article: Article): Observable<Panier> {
    return this.findByUserId(idUser).pipe(switchMap(panier => {
      panier.articles.push(article)
      return this.http.patch<Panier>(`${this.API_URL}/paniers/${panier.id}`, {
        articles: panier.articles
      })
    }))
  }

  
  vider(id: number) {
    return this.http.patch<Panier>(`${this.API_URL}/paniers/${id}`, {
      articles: []
    })
  }
}
