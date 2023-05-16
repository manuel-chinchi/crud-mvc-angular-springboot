import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ARTICLES } from '../articles.json';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html'
})
export class ArticleListComponent implements OnInit {

  public articles: Article[];

  constructor() { }

  ngOnInit(): void {
    this.articles = ARTICLES;
  }
}
