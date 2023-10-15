import { Component, OnInit, ViewChild } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from 'src/app/services/article.service';
import { Subject } from 'rxjs';
import { ArticleActionButtonsComponent } from '../article-action-buttons/article-action-buttons.component';
import { DataTableDirective } from 'angular-datatables';
import { ajax } from 'jquery';
// import DataTables from 'datatables.net';
// import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html'
})
export class ArticleListComponent implements OnInit {
  @ViewChild(DataTableDirective) dtElement: DataTableDirective;

  public articles: Article[];
  private articleService: ArticleService;
  // public dtElement: DataTableDirective;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject<any>();
  // public dtInstance: Promise<DataTables.Api>;
  public articlesActionButtons: ArticleActionButtonsComponent;

  constructor(articleService: ArticleService) {
    this.articleService = articleService;
  }

  deleteAction(id: number): void {
    this.articleService.deleteArticle(id).subscribe(
      (response) => console.log(`Cliente ID: ${id} eliminado!!!`)
    );

    console.log(`quedan ${this.articles.length}`);

    this.rerender();

  }

  rerender(): void {
    // this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
    //   // Destroy the table first
    //   dtInstance.destroy();
    //   // Call the dtTrigger to rerender again
    //   this.dtTrigger.next();
    // });

    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // dtInstance.ajax.reload(); // no sirve
      
      dtInstance.destroy(); 
      this.dtTrigger.next();
    });

  }

  ngOnInit() {
    this.articleService.getArticles().subscribe(
      (articles) => {
        this.articles = articles,
          this.dtTrigger.next(null)
      });

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
                <button id="btn_delete" type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="">Eliminar</button>
              </div>
            </form>
            `
          },
          // OLD!!!!!!
          // BORRA EL ELEMENTO, PERO ES MEDIO FEA ESTA FORMA...!!!!!
          // resource link
          // https://datatables.net/forums/discussion/74980/how-to-add-a-action-button-in-a-datatable-of-an-angular-component-to-call-typescript-function
          createdCell: function (cell: any, cellData: any, rowData: any, rowIndex: any, colIndex: any) {
            $(cell).find('button').on('click', function (event) {
              event.preventDefault();

              var id_article = rowData[0];
              var action = $(this).attr('id');

              // if (action == 'btn_delete') {
              //   ajax({
              //     url: `http://localhost:8080/api/articles/${id_article}`,
              //     type: 'DELETE',
              //     success: function () {
              //       // alert(`se elimino elemento ${id_article}`)
              //       // console.log(`se elimino elemento ${id_article}`);
              //     }
              //   });
              // }
            });
          }
        }
      ],
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        // Unbind first in order to avoid any duplicate handler
        // (see https://github.com/l-lin/angular-datatables/issues/87)
        // Note: In newer jQuery v3 versions, `unbind` and `bind` are
        // deprecated in favor of `off` and `on`
        // $('td', row).off('click');
        // $('td', row).on('click', () => {
        //   self.deleteAction(1);
        // });
        // return row;

        $(row).find('button').on('click', function () {
          console.log(data);
          var action = $(this).attr('id');
          var id_article = data[0];

          if (action == 'btn_edit') {
            console.log('edit')
          }
          else if (action == 'btn_details') {
            console.log('details')
          }
          else {
            // console.log(this);
            self.articles.splice(index, 1);
            self.deleteAction(id_article);
            // self.refreshList();
          }
          return row;
        });
      },
      // data: this.articleService.getArticles()
      // ajax: (dataTablesParameters: any, callback) => {
      //   this.http.get<Article[]>(
      //     `http://localhost:8080/api/articles`,
      //     dataTablesParameters
      //   ).subscribe(data => {
      //     this.articleService.getArticles()
      //   }
      //   );
      // }
    }; // end 'dtOptions'
  };

  // ngAfterViewInit(): void {
  //   this.dtTrigger.next();
  //   this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
  //     dtInstance.columns().every(function () {
  //       // const that = this;
  //       // $('input', this.footer()).on('keyup change', function () {
  //       //   if (that.search() !== this['value']) {
  //       //     that.search(this['value']).draw();
  //       //   }
  //       // });
  //     });
  //   });
  // }
  // ngAfterViewInit(): void {
  //   this.dtTrigger.next();
  //   this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
  //     // dtInstance.data = this.articleService.getArticles();
  //     const self = this;
  //     dtInstance.columns().every(function () {
  //       self.articles.length
  //     });
  //   });
  // }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
