import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from 'src/app/services/article.service';
import { Subject } from 'rxjs';
import { ArticleActionButtonsComponent } from '../article-action-buttons/article-action-buttons.component';
import { ajax } from 'jquery';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html'
})
export class ArticleListComponent implements OnInit {

  public articles: Article[];
  private articleService: ArticleService;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject<any>();
  public articlesActionButtons: ArticleActionButtonsComponent;

  constructor(articleService: ArticleService) {
    this.articleService = articleService;
  }

  public deleteAction(id: number) {
    console.log(id);
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
          first: 'Primero',
          previous: 'Anterior',
          next: 'Siguiente',
          last: 'Último'
        }
      },
      columns: [
        { title: '#' },
        { title: 'nombre' },
        { title: 'categoria' },
        { title: 'descripcion' },
        { title: 'cantidad' },
        {
          title: 'accion',
          data: null,
          // show buttons in angular-datatables
          // https://stackoverflow.com/questions/71568100/datatable-with-angular-adding-buttons-to-rows-with-angular-click-event
          // render: function (data, row) {
          //   return `${new ArticleActionButtonsComponent().contentHTML}`
          // }
          render: function (data, row) {
            return `
            <form>
              <div class="btn-toolbar">
                <button id="btn_edit" class="btn btn-primary btn-sm px-3 mr-1" name="id" value="">Editar</button>

                <!-- Button trigger modal 'Details' -->
                <button id="btn_details" type="button" class="btn btn-success btn-sm mr-1" data-toggle="modal" data-target="">Detalles</button>

                <!-- Button trigger modal 'Delete' -->
                <button id="btn_delete" (click)="deleteAction(1)"  type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="">Eliminar</button>
              </div>
            </form>
            `
          },
          // BORRA EL ELEMENTO, PERO ES MEDIO FEA ESTA FORMA...!!!!!
          // resource link
          // https://datatables.net/forums/discussion/74980/how-to-add-a-action-button-in-a-datatable-of-an-angular-component-to-call-typescript-function
          createdCell: function (cell: any, cellData: any, rowData: any, rowIndex: any, colIndex: any) {
            $(cell).find('button').on('click', function (event) {
              event.preventDefault();

              var id_article = rowData[0];
              var action = $(this).attr('id');

              if (action == 'btn_delete') {
                ajax({
                  url: `http://localhost:8080/api/articles/${id_article}`,
                  type: 'DELETE',
                  success: function (data) {
                    alert(`se elimino elemento ${id_article}`)
                  }
                });
              }
            });
          }

        }
      ]
    };
  };


}
