import { Component, OnInit } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html'
})
export class ArticleListComponent implements OnInit {

  public articles: Article[] = [
    { id: 1, name: 'zapatilla', description: 'nike, talle 44', quantity: 100 },
    { id: 2, name: 'remera', description: 'adidas, talle M', quantity: 100 },
    { id: 3, name: 'boxer', description: 'hombre', quantity: 100 }
  ];

  constructor() { }

  ngOnInit(): void {
    
  }
}
