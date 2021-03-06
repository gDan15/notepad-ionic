import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { NoteService }  from '../../note.service';
import { Note } from '../../note';

/**
 * Generated class for the NoteDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'note-detail',
  templateUrl: 'note-detail.html'
})
export class NoteDetailComponent {
  @Input() note: Note;
  text: string;
  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService,
    private location: Location
  ) {
    console.log('Hello NoteDetailComponent Component');
    this.text = 'Hello World';
  }
  ngOnInit() : void {
    this.getNote();
  }
  getNote(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.noteService.getNote(id).subscribe(note => this.note = note);;
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.noteService.updateNote(this.note)
     .subscribe(() => this.goBack());
  }


}
