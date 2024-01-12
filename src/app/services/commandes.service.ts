import { Injectable } from '@angular/core';
import { Commande } from '../models/commande';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommandesService {
  

  commandeUrl: string = environment.apiUrl;

  commandes: Commande[] = [
    {
    id: 1,
    date: new Date(),
    userId: 1,
    panier: {
      id:1,
      userId: 1,
      articles: [{
        id: 1,
        nom: "test2",
        description: "no",
        prix: 89,
        image: ""
      }]
    }
    }
  ]

  constructor(private http: HttpClient) { }

  all(): Observable<Commande[]> {
    return this.http.get<Commande[]>(`${this.commandeUrl}/commandes`);
  }

  findByUserId(id: number): Observable<Commande[]> {
    return this.http.get<Commande[]>(`${environment.apiUrl}/commandes?userId=${id}`)
  }

  valid(commande: Commande): Observable<Commande> {
    return this.http.post<Commande>(`${environment.apiUrl}/commandes`, commande);
  }

}
