import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { NoteService }  from '../../note.service';
import { Note } from '../../note';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage(
  {
    name:'dashboard'
  }
)
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  notes: Note[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private noteService: NoteService) {
  }
  ngOnInit() {
    this.getNote();
    // this.navCtrl.push('dashboard');
  }

  getNote(): void {
    this.noteService.getNotes()
      .subscribe(notes => this.notes = notes.slice(1, 5));
  }
  goToDetail(note: Note) {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push('detail',{'id': note.id});
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

}
