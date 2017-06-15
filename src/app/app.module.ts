import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardviewComponent } from './boardview/boardview.component';
import { LoginviewComponent } from './loginview/loginview.component';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    AppComponent,
    BoardviewComponent,
    LoginviewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginviewComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
