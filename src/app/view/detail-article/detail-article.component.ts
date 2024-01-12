import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent {

  article?: Article

  constructor(route: ActivatedRoute){
    route.data.subscribe({
      next: ({article}) => {
        this.article = article
      }
    })
  }

}
