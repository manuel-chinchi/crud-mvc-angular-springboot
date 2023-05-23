import { Injectable } from '@angular/core';
import { ARTICLES } from 'src/app/modules/components/article/articles.json';
import { Article } from 'src/app/modules/components/article/article';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable()

export class ArticleService {

  constructor() { }

  getArticles(): Observable<Article[]> {
    return of(ARTICLES);
  }
}
