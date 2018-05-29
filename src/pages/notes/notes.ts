import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../note.service';
import { Note } from '../../note';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage {
  notes:Note[];
  selectedNote:Note;
  note : Note;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private noteService : NoteService) {
  }
  ngOnInit() {
      this.getNotes();
  }

  getNotes() : void{
    this.noteService.getNotes().subscribe(notes => this.notes = notes);
  }

  onSelect(note: Note): void {
    this.selectedNote = note;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NotesPage');
  }
}
