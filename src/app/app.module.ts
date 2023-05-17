import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ArticleListComponent } from './modules/components/article/article-list/article-list.component';
import { ArticleCreateComponent } from './modules/components/article/article-create/article-create.component';
import { ArticleEditComponent } from './modules/components/article/article-edit/article-edit.component';
import { AppRoutingModule } from './app-routing.module';

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
    AppRoutingModule
  ],
  providers: [
    // Service classes, etc
  ],
  bootstrap: [AppComponent] // Main component
})
export class AppModule { }
