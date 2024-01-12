import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent {
  
  @Input()
  articles: Article[] = [];
}
