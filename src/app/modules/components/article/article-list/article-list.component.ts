import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from 'src/app/core/services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html'
})
export class ArticleListComponent implements OnInit {

  public articles: Article[];
  private articleService: ArticleService;

  constructor(articleService: ArticleService) {
    this.articleService = articleService;
  }

  ngOnInit(): void {
    this.articles = this.articleService.getArticles();
  }
}
