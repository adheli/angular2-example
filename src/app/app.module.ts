import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal'

import { AppComponent } from './app.component';
import { ModalExampleComponent } from './modal-example/modal-example.component';
import { ModalBootstrapComponent } from './modal-bootstrap/modal-bootstrap.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalExampleComponent,
    ModalBootstrapComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
