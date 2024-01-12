import { Injectable, inject } from '@angular/core';
import { Article } from '../models/article';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, combineLatest, concatMap, map } from 'rxjs';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  API_URL = "http://localhost:3000";

  articles: Article[] = [
    {
      description: "Un article",
      id: 1,
      image: "",
      nom: "Article 1",
      prix: 50
    },
    {
      description: "Un article",
      id: 2,
      image: "",
      nom: "Article 2",
      prix: 100
    },
    {
      description: "Un article",
      id: 3,
      image: "",
      nom: "Article 3",
      prix: 20
    }
  ]

  constructor(private http: HttpClient) { }

  save(article: Article) : Observable<Article> {
    //this.articles.push(article);
    return this.http.post<Article>(`${this.API_URL}/articles`, article)
  }

  all(): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.API_URL}/articles`);
  }

  get(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.API_URL}/articles/${id}`);
  }


  allPaged(page: number, size: number): Observable<{total: number, articles: Article[]}> {
    return this.http.get<Article[]>(`${this.API_URL}/articles?_page=${page}&_limit=${size}`, {observe: 'response'})
    .pipe(map(response => {
      return {
        total : Number(response.headers.get("X-Total-Count")) || 0,
        articles: response.body|| []
      }
    }));
  }
}

export const articleByIdResolver = (route: ActivatedRouteSnapshot) => {
  const id: number = Number(route.paramMap.get("id"))
  return inject(ArticlesService).get(id)
}