import { Injectable } from '@angular/core';
import { Article } from 'src/app/modules/components/article/article';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class ArticleService {

  private baseUrl = 'http://localhost:8080/api/articles';
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.baseUrl);
  }
}
