import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {NotesPage } from '../pages/notes/notes';
import { NoteDetailComponent }  from '../components/note-detail/note-detail';
// import { NoteAddComponent } from './note-add/note-add.component';
// import { DashboardComponent }   from './dashboard/dashboard.component';

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: NoteDetailComponent },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'addNote', component: NoteAddComponent },
  { path: 'notes', component : NotesPage }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }
