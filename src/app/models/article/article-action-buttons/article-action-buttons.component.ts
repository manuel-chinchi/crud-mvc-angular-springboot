import { Component } from '@angular/core';


@Component({
  selector: 'app-article-action-buttons',
  templateUrl: './article-action-buttons.component.html'
})
export class ArticleActionButtonsComponent {

  // hasta ahora es la única manera que encontre de renderizar los botones en las
  // filas de la tabla de articulos ya que hay poca documentacion sobre esto
  // para angular-datatables
  public contentHTML: String = `
  <form>
    <div class="btn-toolbar">
      <button (click)=test() class="btn btn-primary btn-sm px-3 mr-1" name="id" value="">Editar</button>
      <!-- Button trigger modal 'Details' -->
      <button type="button" class="btn btn-success btn-sm mr-1" data-toggle="modal" data-target="">Detalles</button>
      <!-- Button trigger modal 'Delete' -->
      <button routerLink="/articles" method="delete" type="button" class="btn btn-danger btn-sm" data-toggle="modal" data-target="">Eliminar</button>
    </div>
  </form>
  `;

  constructor() {}

  test() {
    console.log('sss');
  }
}
