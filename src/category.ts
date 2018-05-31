import { Note } from './note';

export class Category {
  id:number;
  wording:string;
  // notes:Note[];
  constructor(wording:string){
    // NOTE : is this necessary ?
    this.wording=wording;
  }
}
