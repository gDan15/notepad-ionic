import { Note } from './note';

export class Category {
  id:number;
  wording:string;
  notes:note[];
  constructor(wording:string){
    // NOTE : is this necessary ?
    this.wording=wording;
  }
}
