import { Injectable } from '@angular/core';
import { Article } from 'src/app/models/article/article';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class ArticleService {

  private baseUrl = 'http://localhost:8080/api/articles';
  private http: HttpClient;
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(http: HttpClient) {
    this.http = http;
  }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.baseUrl);
  }

  createArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(this.baseUrl, article, { headers: this.httpHeaders });
  }

  deleteArticle(id: number): Observable<Article> {
    return this.http.delete<Article>(`${this.baseUrl}/${id}`, { headers: this.httpHeaders });
  }
}
