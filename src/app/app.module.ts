import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './views/shared/header/header.component';
import { FooterComponent } from './views/shared/footer/footer.component';
import { ArticleListComponent } from './models/article/article-list/article-list.component';
import { ArticleCreateComponent } from './models/article/article-create/article-create.component';
import { ArticleEditComponent } from './models/article/article-edit/article-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { ArticleService } from './services/article.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent, // Custom components
    HeaderComponent,
    FooterComponent,
    ArticleListComponent,
    ArticleCreateComponent,
    ArticleEditComponent
  ],
  imports: [
    BrowserModule, // NgIf, NgFor...
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule
  ],
  providers: [
    ArticleService // Service classes, etc
  ],
  bootstrap: [AppComponent] // Main component
})
export class AppModule { }
