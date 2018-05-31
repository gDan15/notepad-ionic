import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


// import { HttpClient, HttpHeaders } from '@angular/common/http';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { NotesPage } from '../pages/notes/notes';
import { NoteService } from '../note.service';
import { MessageService } from '../message.service';
import { NoteDetailComponent } from '../components/note-detail/note-detail';
import { NoteAddPage } from '../pages/note-add/note-add';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { CategoriesPage } from '../pages/categories/categories';
import { CategoryDetailPage } from '../pages/category-detail/category-detail';
import { CategoryService } from '../category.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NotesPage,
    NoteAddPage,
    NoteDetailComponent,
    CategoriesPage,
    DashboardPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // RouterModule,
    AppRoutingModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NotesPage,
    NoteAddPage,
    CategoriesPage,
    DashboardPage,
    NoteDetailComponent,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NoteService,
    CategoryService,
    MessageService,
    // RouterModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
