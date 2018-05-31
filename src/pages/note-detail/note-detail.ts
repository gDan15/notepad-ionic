import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { NoteService }  from '../../note.service';
import { Note } from '../../note';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NoteDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage(
  {
    name:'detail',
    segment: 'detail/:id'
  }
)
@Component({
  selector: 'page-note-detail',
  templateUrl: 'note-detail.html',
})
export class NoteDetailPage {
  @Input() note: Note;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private route: ActivatedRoute,
    private noteService: NoteService,
    private location: Location
  ) {
  }
  ngOnInit() : void {
    this.getNote();
  }
  getNote(): void {
    const id = this.navParams.get('id');
    this.noteService.getNote(id).subscribe(note => this.note = note);;
  }

  save(note : Note): void {
    this.noteService.updateNote(this.note);
     // .subscribe(() => this.goBack());
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NoteDetailPage');
  }

}
