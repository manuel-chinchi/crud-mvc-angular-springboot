import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './app/components/header/header.component';
import { FooterComponent } from './app/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent, // Custom components
    HeaderComponent, 
    FooterComponent
  ],
  imports: [
    BrowserModule // NgIf, NgFor...
  ],
  providers: [
    // Service classes, etc
  ],
  bootstrap: [AppComponent] // Main component
})
export class AppModule { }
