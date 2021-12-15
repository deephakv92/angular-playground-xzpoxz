import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { HelloFrameworkModule } from './hello-framework';
import { MaterialModule } from './shared/material.module';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    CoreModule,
    BrowserModule,
    HelloFrameworkModule,
    MaterialModule
  ],
})
export class AppModule {}
