import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent // Custom components
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
