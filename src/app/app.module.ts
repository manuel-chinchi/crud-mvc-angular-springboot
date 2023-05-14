import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './app/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent, // Custom components
    HeaderComponent
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
