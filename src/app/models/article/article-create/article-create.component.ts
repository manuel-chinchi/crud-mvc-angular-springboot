import { Component } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from 'src/app/services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html'
})
export class ArticleCreateComponent {

  public article: Article = new Article()
  private articleService: ArticleService
  private router: Router

  constructor(articleService: ArticleService, router: Router) {
    this.articleService = articleService;
    this.router = router;
  }

  public create(): void {
    this.articleService.createArticle(this.article).subscribe(
      response => this.router.navigate(['article-list'])
    );
  }
}
