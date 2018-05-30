import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoteAddPage } from './note-add';

@NgModule({
  declarations: [
    NoteAddPage,
  ],
  imports: [
    IonicPageModule.forChild(NoteAddPage),
  ],
})
export class NoteAddPageModule {}
