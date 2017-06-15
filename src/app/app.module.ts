import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardviewComponent } from './boardview/boardview.component';
import { LoginviewComponent } from './loginview/loginview.component';
import { RouterModule } from '@angular/router';
import { DateviewComponent } from './dateview/dateview.component';
import { SchedulerviewComponent } from './schedulerview/schedulerview.component';





@NgModule({
  declarations: [
    AppComponent,
    BoardviewComponent,
    LoginviewComponent,
    DateviewComponent,
    SchedulerviewComponent
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
