import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardviewComponent } from './boardview/boardview.component';
import { LoginviewComponent } from './loginview/loginview.component';
import { RouterModule } from '@angular/router';
import { DateviewComponent } from './dateview/dateview.component';
import { SchedulerviewComponent } from './schedulerview/schedulerview.component';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';



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
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginviewComponent
      },
       {
        path: 'scheduler',
        component: SchedulerviewComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
