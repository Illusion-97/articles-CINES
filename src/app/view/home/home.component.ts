import { Component } from '@angular/core';
import {map, Observable, of, tap} from 'rxjs';
import { Article } from 'src/app/models/article';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  articles: Article[] = []
  total: number = 0
  page: number = 1;
  size: number = 15;


  constructor(private service: ArticlesService) {
    this.getArticles(this.page)
  }

  getArticles(page: number) {
    this.page = page
    this.service.allPaged(page, this.size).subscribe({
      next: p => {
        this.articles = p.articles
        this.total = p.total
      }
    });
  }

}
