import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from 'src/app/services/article.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html'
})
export class ArticleListComponent implements OnInit {

  public articles: Article[];
  private articleService: ArticleService;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject<any>();

  constructor(articleService: ArticleService) {
    this.articleService = articleService;
  }

  ngOnInit() {
    this.articleService.getArticles().subscribe(
      (articles) => {
        this.articles = articles,
        this.dtTrigger.next(null)
      }
    );

    // Documentation
    // https://datatables.net/reference/option/language
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: {
        info: 'Mostrando registro _START_ hasta el _END_',
        infoEmpty: '',
        infoFiltered: '',
        zeroRecords: 'No se encontraron registros coincidentes',
        search: 'Buscar:',
        lengthMenu: 'Mostrar _MENU_ registros',
        paginate: {
          first: 'primero',
          previous: 'Anterior',
          next: 'Siguiente',
          last: 'último'
        }
      }
    };
  };
}
