import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { NoteService }  from '../../note.service';
import { Note } from '../../note';

import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the NoteAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-note-add',
  templateUrl: 'note-add.html',
})
export class NoteAddPage {
  note : Note;
  notes : Note[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private route: ActivatedRoute,
    private noteService: NoteService,
    private location: Location) {
  }
  ngOnInit() : void {
    // this.getNote();
    this.notes = new Array<Note>();
  }
  getNotes() : void{
    this.noteService.getNotes().subscribe(notes => this.notes = notes);
  }
  //TODO : have to add category and reformate date in order to work
  addNote(title:string, content:string, date:string, category:string):void{

    this.note = new Note(title,content,date,category);
    console.log('My note is called ' + this.note.title);
    this.noteService.addNote(this.note)
      .subscribe(note => {
        this.notes.push(this.note);
      });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NoteAddPage');
  }

}
