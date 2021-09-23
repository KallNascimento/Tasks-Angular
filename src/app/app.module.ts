import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { AboutComponent } from './components/about/about.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { TasksComponent } from './components/tasks/tasks.component';


@NgModule ({ 
declarations: [
    AppComponent,
    ButtonComponent,
    HeaderComponent,
    AboutComponent,
    AddTaskComponent,
    TaskItemComponent,
    FooterComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
