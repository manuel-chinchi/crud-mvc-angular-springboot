import { Injectable } from '@angular/core';
import { ARTICLES } from 'src/app/modules/components/article/articles.json';
import { Article } from 'src/app/modules/components/article/article';

@Injectable()
export class ArticleService {

  constructor() { }

  getArticles(): Article[] {
    return ARTICLES;
  }
}
