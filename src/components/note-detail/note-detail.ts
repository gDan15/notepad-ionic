import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello NoteDetailComponent Component');
    this.text = 'Hello World';
  }

}
